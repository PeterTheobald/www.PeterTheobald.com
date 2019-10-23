---
date: "2016-11-26"
draft: false
title: "Ghost Solver - In Which We Ruin a Great Game"
thumbnail: "trie-ghost2.png"
categories: [tech]
tags: [ "python", "games", "puzzles", "programming"]
---

My son showed me a new word game, 'Ghost', and I wrote a Python program to "solve" the game and find all winning sequences.

<!--more-->

The game played like this: We took turns adding a letter to a growing word fragment, trying not to be the one to complete a valid word. Each fragment must be the beginning of an actual word and there is a minimum of 4 letters to count as a complete word. The player who completes a word loses the round.

For example one of our rounds went like this:

	- He started with 'T',
	- I responded with 'R', 
	- No matter what he responds with I will respond with 'C': TRAC, TREC, TRIC, TROC, TRUC,
	- He will have to respond with K, completing a word and losing.
	
We played for a while and I really enjoyed it. So naturally I felt compelled to write a program to "solve" the game and find which words would guarantee a win for the player whether he plays first or second. Why would I do this when I know it will ruin the game? Didn't I remember how hollow the victory was when I figured out the winning sequences to Tic-Tac-Toe as a kid? Because writing this program is more fun than playing the game, that's why.

# The Program

The algorithm is relatively simple:
	
1. Read a dictionary into a tree so from any letter I can traverse what letters could follow.
2. Traverse that tree, finding words that WIN for the player and LOSE for the opponent.
3. List the words guaranteed to win for each starting letter, or choose the best of several branches when there is more than one choice.
	
The data structure is a [TRIE](https://en.wikipedia.org/wiki/Trie) : It is a hash/dictionary with the first letters for keys and another hash/dictionary for the values. Each sub-hash/dictionary likewise has the subsequent letter as a key and another hash/dictionary as the value, until the end of a word is reached and the value will be an empty list or Null/Nil/None.

The search does two things:

1. For end-of-words with no 'next letter' return WIN if the opponent had to complete a word or LOSE if the player had to complete a word, depending on which player went first and whether it's an even or odd turn.
2. For all other letters (nodes) recursively check each branch. If it's the players turn and any branches guarantee a win choose the 'best' branch and return it. If it's the opponents turn and every branch forces a win return them all. If any branches lose assume the opponent would choose that and return LOSE.

Here is the code in Python. I've put it up on GitHub at [ghostSolver](https://github.com/PeterTheobald/GhostSolver)

```python
# ghostSolver.py
# Peter@PeterTheobald.com 2016
#
# Ghost is a word game in which players take turns adding letters to a growing
# word fragment, trying not to be the one to complete a valid word. Each
# fragment must be the beginning of an actual word, there is a minimum of four
# letters of a word that counts. The player who completes a word loses the round.
#
# This program reads a dictionary and figures out words that will guarantee
# a win both for the player who plays first and the player who plays second.
#
# Input: ghostSolver.py < wordlist.txt
# Output: Player goes first: list of winning words.
#         Player goes second: list of winning words.

import pprint
import fileinput
import re

# Our trie is a tree of letters forming words.
# Implemented as a hash-map with letters as keys; values are sub-tries or nil
# In the ghost game no words are allowed with complete words as prefixes
#   eg: if we have "cart" we can never reach "cartridge"

def trieLetters( trie):
  return trie.keys()
  
def subTrie( trie, letter):
  return trie[letter]

# read through a list of words, split each word into letters,
# traverse the letters in the tree and add any new letters found
# throw away any words less than 4 letters long
# throw away any words that are supersets of existing words
# this is made easier because we assume the input is always sorted
# dont need any end-of-word markers because there are no supersets.
# leaf nodes are always end-of-word. non-leaf nodes are never end-of-word.

def buildTrie():
  trie={}
  for line in fileinput.input():
    word=line.rstrip()
    if len(word)<4:
      continue
    # clean out some cruft from online dictionaries, anything with Capitals or punctuation
    if re.search( '[^a-z]', word):
      continue
    p=trie
    newnode=True
    for letter in word:
      if letter in p:
        # this letter has already been created (for a different word), follow it
        p=subTrie( p, letter)
        newnode=False
      else:
        # This letter isn't here. Is it because we are adding new letters onto the tree
        # or because we've reached the end of a complete existing word?
        if p or newnode:
          # create new node for this letter
          p[letter]={}
          newnode=True
          p=subTrie( p, letter)
        else:
          # this is a superset of an existing word
          continue # skip it-Ghost can't use it and saves lots of memory
  return trie

def isOdd(x):
  return x%2
def isEven(x):
  return not x%2
def isPlayersMove( partialWord, playerGoesFirst):
  return ((playerGoesFirst and isEven( len( partialWord)))
          or ( not( playerGoesFirst) and isOdd( len( partialWord))))

# returns list of all words branching from this trie
# can also be used for all words branching from a sub-trie and a partial word
def allWords( trie, partialWord):
  if not trie:
    return [partialWord]
  resultList=[]
  for l in trieLetters( trie):
    resultList.extend( allWords( subTrie(trie, l), partialWord+l))
  return resultList
           
def bestWords( trie, partialWord): # I have words. I have the best words.
  # in: a partial word, and a tree of completions of that word
  # out: a tree with the best branch in it
  # best is defined as:
  #   1. the branch with the fewest sub-branches (words)
  #   2. the branch with the shortest word
  #   3. the branch with alphabetically first word
  # Note: this is somewhat subjective:
  #       1 long word is 'better' than 2 short words
  #       3 short words and 3 long words are 'better' than 6 medium words
  wordList=[]
  countWords={}
  shortestWord={}
  alphaFirstWord={}
  for l in trieLetters( trie):
    # pre-calculate sort keys for each letter and list of words
    wordList=allWords( subTrie( trie, l), partialWord+l)
    countWords[l]=len( wordList)
    shortestWord[l]=min(map(len,wordList))
    alphaFirstWord[l]=sorted(wordList)[0]
  bestBranchLetter=sorted( trie, 
                  key=lambda x: ( countWords[x], shortestWord[x], alphaFirstWord[x])
                  )[0]
  return { bestBranchLetter: subTrie( trie, bestBranchLetter)}

def winningMoves( trie, partialWord, playerGoesFirst):
  # traverse the tree, find words that lose and prune them. Only pass back up the winning words
  if ( isPlayersMove( partialWord, playerGoesFirst)):
    # Player's move
    # played 'word' so far, next letter is one of tree.keys
    # if ANY children are winning words, choose the best one
    # prune the rest
    resultNode={}
    for l in trieLetters( trie): # search all children branches
      if subTrie( trie, l): # skip losing end-of-words
        subResult=winningMoves( subTrie( trie, l), partialWord+l, playerGoesFirst)
        if subResult:
          resultNode[l]=subResult
    if (resultNode):
      return bestWords( resultNode, partialWord)
    else:
      return None
  else:
    # Opponent's move
    # played 'word' so far, next letter is one of tree.keys
    # if ALL children are winning words, prune losers return ALL win word branches
    # if ANY children lose, this is a dangerous branch return None
    # if opponent must complete a word, this is a win word
    resultNode={}
    for l in trieLetters( trie): # search all children branches
      if not subTrie( trie, l): # end of word keep a win
        resultNode[l]={}
      else:
        subResult=winningMoves( subTrie( trie, l), partialWord+l, playerGoesFirst)
        if not subResult: # found a losing branch, prune this
          return None
        else:
          resultNode[l]=subResult # keep winning branches
    return resultNode   

def printWinners( trie, playerGoesFirst):
    for l in sorted( trieLetters( trie)):
        winningTrie=winningMoves( subTrie( trie, l), l, playerGoesFirst)
        if (winningTrie):
            print(l+": %s" % sorted(allWords( winningTrie, l)))
        else:
            print(l+": No winning words")

def main():
    trie=buildTrie( )
    print( "Player goes first: winning words:\n")
    printWinners( trie, True)
    print( "\nAdversary goes first: winning words:\n")
    printWinners( trie, False)

if __name__ == "__main__":
    main()

```

# The Results

```
Player goes first: winning words:

  a: No winning words  
  b: No winning words  
  c: No winning words  
  d: No winning words  
  e: No winning words  
  f: No winning words  
  g: No winning words  
  h: ['hack', 'hegemony', 'hick', 'hoar', 'hues', 'hybrid']  
  i: No winning words  
  j: ['jack', 'jest', 'jigs', 'jobs', 'just']  
  k: No winning words  
  l: No winning words  
  m: ['maze', 'meek', 'meet', 'mien', 'mnemonic', 'moan', 'moat', 'muff', 'myth']  
  n: No winning words  
  o: No winning words  
  p: No winning words  
  q: No winning words  
  r: ['raft', 'relate', 'relating', 'relent', 'relish', 'reload', 'reluctance', 'rely', 'rhapsody', 'rill', 'rock', 'ruin']  
  s: No winning words  
  t: No winning words  
  u: No winning words  
  v: No winning words  
  w: No winning words  
  y: No winning words  
  z: ['zeal', 'zinc', 'zodiac']  

Adversary goes first: winning words:

  a: ['ahead']  
  b: ['black', 'bleed', 'blimp', 'bloat', 'bluff']  
  c: ['clarity', 'cleft', 'cliff', 'cloak', 'cluck']  
  d: ['draft', 'dregs', 'drift', 'droll', 'drunk', 'dryly']  
  e: ['equal', 'equator'] 
  f: ['frail', 'freak', 'friar', 'frock', 'fruit']  
  g: ['graft', 'grenade', 'grill', 'groan', 'gruff']  
  h: No winning words  
  i: ['illegal']  
  j: No winning words  
  k: ['knack', 'knead', 'knife', 'knifing', 'knock', 'knuckle']  
  l: ['lying', 'lymph', 'lynch', 'lyric']  
  m: No winning words  
  n: ['nylon', 'nymph']  
  o: ['ozone']  
  p: ['pneumatic']  
  q: ['quack', 'quell', 'quick', 'quonset']  
  r: No winning words  
  s: ['squeamish', 'squeeze', 'squeezing', 'squelch']  
  t: ['twain', 'tweed', 'twice', 'twofold']  
  u: ['ulcer', 'ultra']  
  v: ['vulture']  
  w: ['whack', 'wheat', 'which', 'whoop']  
  y: ['yield']  
  z: No winning words  
```

I also tried it with a 176,000 word scrabble dictionary (TWL06) a monster 267,000 word meta-dictionary compilation from several dictionaries (SOWPODS) and a smaller 32,000 word dictionary (6of12). The results from each obviously varied due to the different words available. You should use the one that most closely matches your vocabulary and the dictionary you will use to check challenges when you play. You can download a copy of these wordlists from the [GhostSolver github repo](https://github.com/PeterTheobald/GhostSolver).

# Randall Munroe Did It First

After going through all of this someone pointed out to me that Randall Munroe of XKCD has a [blog post](https://blog.xkcd.com/2007/12/31/ghost/) about solving this game. He discussed it but didn't post any code. His results differed slightly from mine. This is due to two factors: We most likely used different dictionaries and we coded different subjective definitions of the "best" choice among winning branches.

In the code when the player has the choice of different letters that lead down different branches that each lead to winning words, I choose the "best" branch to present. I have subjectively coded the definition of best as:

1. Choose the branch with fewer words in it. Remembering one winning word is better than remembering two or three winning words.
2. Otherwise choose the branch with the shortest word in it.
3. Otherwise choose the branch with a word that comes first alphabetically.
	
This implies that a branch with one long word is considered better than a branch with two short words, and a six-word branch with 3 short words and 3 long words is considered better than a six-word branch with 6 medium length words.

So now I'm satisfied. I've written my program. I've solved the game. I've ruined Ghost.

- I think the algorithm is very recursive and LISPy, and would be expressed very naturally in Clojure. I'd like to re-write it in Clojure.  UPDATE: I've rewritten it in Clojure, [read about it](/tech/ghost-solver-in-clojure).
- I'd also like to ruin my favorite game WordBase by writing an AI player. I already have the general algorithm in mind using minimax searching with alpha-beta pruning and a good static board evaluator.

