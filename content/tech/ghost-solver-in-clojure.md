---
date: "2016-12-20"
draft: false
title: "Ghost Solver - Now in Clojure"
thumbnail: "trie-ghost2.png"
categories: [tech]
tags: [ "clojure", "games", "puzzles", "programming"]
---

[My previous post](/tech/ghost-game-solver/) was about a Python program to calculate the moves to guarantee a win in the puzzle word game 'Ghost'. The algorithm was naturally recursive and felt 'LISPy'. [@pdlug](http://www.twitter.com/pdlug) has been telling me how writing in Clojure will expand my mind, make me more productive and hem my pants so this week I learned just enough Clojure (I already knew LISP) to re-write the Ghost game solver in Clojure.

<!--more-->

See the [previous post](/tech/ghost-game-solver) for details on the Ghost game and the python code. The algorithm is exactly the same, the implementation slightly different. Because Clojure is strongly functional I couldn't update the Trie in place but instead had to return updated sub-tries as I went. As a traditionally imperative programmer I felt the efficiency hairs rise on the back of my neck thinking about all the extra data manipulation this would cause, but I was pleasantly surprised at how efficient Clojure is. Under the hood Clojure has very efficient re-use of data, just rebuilding tree structures to use existing data in different ways.

# The Clojure Program

Here is the code in Clojure. I've put it up alongside the Python code on GitHub at [ghostSolver](https://github.com/PeterTheobald/GhostSolver)

```clojure
; ghost-solver.clj
; Peter@PeterTheobald.com 2016
;
; Ghost is a word game in which players take turns adding letters to a growing
; word fragment, trying not to be the one to complete a valid word. Each
; fragment must be the beginning of an actual word, there is a minimum of four
; letters of a word that counts. The player who completes a word loses the round.
;
; This program reads a dictionary and figures out words that will guarantee
; a win both for the player who plays first and the player who plays second.
;
; Input: ghostSolver.clj (reads "wordlist.txt")
; Output: Player goes first: list of winning words.
;         Player goes second: list of winning words.

(ns ghost-solver.core
  (:gen-class))
(require '[clojure.java.io :as io])

(defmacro dbg    ; handy debugging tool
  ([x]     `(let [x# ~x] (println "dbg:" '~x "=" x#) x#))
  ([label x] `(let [x# ~x] (println "dbg"(quote ~label) ":" '~x "=" x#) x#)))

;; Our trie is a tree of letters forming words.
;; Implemented as a map with letters as keys; values are sub-tries or nil
;; In the ghost game no words are allowed with complete words as prefixes
;;   eg: if we have "cart" we can never reach "cartridge"
;; In the trie during processing for winning moves,
;;   the entries {letter {}} and {letter nil} have different meanings
;;   nil means end-of-word, {} means no winning sub-tries under this node

(defmacro trie-letters [t] `(keys ~t))
(defmacro subtrie [t l] `(~t ~l))
(defn empty-map? [m]
  (and (empty? m) (not (nil? m))))

(defn add-word [trie word]
  (let [letter (first word)
        sub-trie (subtrie trie letter)]
    (if (contains? trie letter) ; letter already in trie, extend it
      (if (nil? sub-trie)
        trie ; letter is end-of-word, dont add superset words!
      ;else add rest of word to sub-trie
        (assoc trie letter (add-word sub-trie (rest word))))
    ;else
      ; if the letter is not already in the trie put the word in
      ; use a Clojure shortcut to build the whole nested sub-trie all at once
      (assoc-in trie (seq word) nil))))

(defn add-words [words]
  (reduce add-word {} words))

; throw away words less than 4 letters
; clean out some cruft from online dictionaries,
;   anything with Capitals or punctuation
(defn clean-words [words]
  (filter #(and (> (count %) 3) (re-matches #"[a-z]+" %)) words))
  
(defn build-trie [filename]
  (with-open [rdr (clojure.java.io/reader filename)]
    (add-words (clean-words (map clojure.string/trim (line-seq rdr))))))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn players-move? [partial-word player-goes-first]
  (or (and  player-goes-first
            (even? (count partial-word)))
      (and  (not player-goes-first)
            (odd? (count partial-word)))))

(defn all-words
  ; returns list of all words branching from this trie
  ; can also be used for all words branching from a sub-trie and a partial word
  ([trie]
   (all-words trie nil)) ; default arg
  ([trie partial-word]
   (flatten
     (for [l (trie-letters trie)]
       (if (nil? (subtrie trie l))
         (str partial-word l)
        ;else
         (all-words (subtrie trie l) (str partial-word l)))))))
   
(defn best-sort-decorator [t partial-word]
  ; in: sub-trie in the form of a tuple vector [letter sub-trie], partial-word
  ; return decorated tuple for sorting:
  ;        ([count-words len-shortest-word alpha-first-word] [letter sub-trie])
  (if (nil? (second t))
    ; nil means this branch is the end of a word
    (list [1 (count partial-word) partial-word] t)
  ; else
    (let [words (all-words (second t) (str partial-word (first t)))]
      (list [(count words) (apply min (map count words)) (first (sort words))]
            t))))
 
(defn best-words [trie partial-word] ; I have words. I have the best words.
  ; in: a partial word, and a trie of completions of that word
  ; out: a sub-trie with only the best top level branch in it, the rest pruned
  ; best is defined subjectively as:
  ; 1. the branch with the fewest sub-branches (words)
  ; 2. the branch with the shortest word
  ; 3. the branch with alphabetically first word
  ; eg: 1 long word is 'better' than 2 short words
  ;     3 short words and 3 long words are 'better' than 6 medium words
  (->> trie
    ; decorate with ([count-words len-shortest-word alpha-first-word] [letter sub-trie])
    (map #(best-sort-decorator % partial-word))
    (sort-by first)    ; sort by the decorated value
    (map second)       ; undecorate
    first              ; just the best (first sorted) sub-trie
    (apply hash-map)))  ; return a map {letter sub-trie} not a tuple-vector [letter sub-trie]

(defn all-or-nothing [trie]
  ; in: trie hashmap {letter sub-trie ...}
  ; out: if ANY sub-tries are empty {} returns {}, else returns the original trie
  (if (some (fn [t] ((comp empty-map? second) t)) trie) {} trie))
  
(defn winning-moves [trie partial-word player-goes-first]
  ; in: boolean player player-goes-first?
  ;     trie hash-map {letter sub-trie ...}
  ;     partial-word eg: "aardva"
  ; out: trie hash-map w only player winning branches,
  ;      and only the "best" of these from each node
  (cond
    (nil? trie) nil
    (players-move? partial-word player-goes-first)
    (as-> trie X
      (into {} (remove (comp nil? second) X)) ; prune end-of-word player lost
      (reduce (fn [t l]
                 (assoc t l
                  (winning-moves (subtrie X l) (str partial-word l) player-goes-first)))
              {}
              (trie-letters X))        ; find sub-winners
      (into {} (remove (comp empty-map? second)) X) ; prune {} w/no winning moves
      (best-words X partial-word))      ; choose only the best winning branch
    :else ; opponent's move
      ; find sub-winners, return all winning sub-branches.
      ; but if any branches have no winning moves, thus allowing opponent to
      ; force player-loss this entire branch is dangerous, return none {}
      (all-or-nothing
        (reduce (fn [t l]
                  (assoc t l
                    (winning-moves (subtrie trie l) (str partial-word l) player-goes-first)))
                {}
                (trie-letters trie)))))
 
(defn print-winner [trie letter player-goes-first]
  (let [winning-trie (winning-moves trie (str letter) player-goes-first)]
    (if (not (empty-map? winning-trie))
      (println letter ": " (sort (all-words winning-trie letter)))
      (println letter ": No winning words."))))
  
(defn print-winners [trie player-goes-first]
  (map #(print-winner (subtrie trie %) % player-goes-first) (sort (keys trie))))
  
(defn -main []
  (let [trie (build-trie (io/resource "ubuntu-wordlist.txt"))]
    (println "Player goes first: winning words")
    (doall (print-winners trie true))
    (println "Adversary goes first: winning words")
    (doall (print-winners trie false))
    nil))
  ; note: -main doesn't actually consume (use) the return values
  ;       so wrap the functions with doall to force all lazy evaluations to happen
  ;       otherwise Clojure will be happy to return with the silent knowledge
  ;       that it knows how to (print-winners trie true) but since you didn't
  ;       use the result it won't execute all the sub-calculations
"loaded"
```

# The Results

The results were exactly the same, as expected. Both programs runtime was the same order of magnitude (a couple of seconds on a 45,000 word dictionary). Writing it in Clojure took me a little longer than writing it in Python no doubt because I was learning the language at the same time as I wrote the program. Both programs are approximately the same length in lines of code. I found that writing it in Clojure forced me to think more clearly about the problem, ie: what does this sub-trie represent conceptually at each point in the code.

```
Player goes first: winning words
a :  ()
b :  ()
c :  ()
d :  ()
e :  ()
f :  ()
g :  ()
h :  (hack hegemony hick hoar hues hybrid)
i :  ()
j :  (jack jest jigs jobs just)
k :  ()
l :  ()
m :  (maze meek meet mien mnemonic moan moat muff myth)
n :  ()
o :  ()
p :  ()
q :  ()
r :  (raft relate relating relent relish reload reluctance rely rhapsody rill rock ruin)
s :  ()
t :  ()
u :  ()
v :  ()
w :  ()
y :  ()
z :  (zeal zinc zodiac)
Adversary goes first: winning words
a :  (ahead)
b :  (black bleed blimp bloat bluff)
c :  (clarity cleft cliff cloak cluck)
d :  (draft dregs drift droll drunk dryly)
e :  (equal equator)
f :  (frail freak friar frock fruit)
g :  (graft grenade grill groan gruff)
h :  ()
i :  (illegal)
j :  ()
k :  (knack knead knife knifing knock knuckle)
l :  (lying lymph lynch lyric)
m :  ()
n :  (nylon nymph)
o :  (ozone)
p :  (pneumatic)
q :  (quack quell quick quonset)
r :  ()
s :  (squeamish squeeze squeezing squelch)
t :  (twain tweed twice twofold)
u :  (ulcer ultra)
v :  (vulture)
w :  (whack wheat which whoop)
y :  (yield)
z :  ()
nil
```


