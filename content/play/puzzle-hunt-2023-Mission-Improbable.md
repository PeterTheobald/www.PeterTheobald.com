---
date: "2024-01-01"
draft: false
title: "Puzzle Hunt 2023 - Mission Improbable"
thumbnail: "puzzle2023-thumbnail.png"
categories: [ play ]
tags: [ "puzzles", "treasure-hunts"]
scripts: [ "puzzle2023.js" ]
---
# My 2023 Xmas Puzzle Hunt: Mission Improbable

<!--more-->

<!-- --------------------------------------------------------------
|                                                                 |
|          DON'T CHEAT YOURSELF OF SOLVING FUN!                   |
|                                                                 |
|            STOP LOOKING AT THE SOURCE CODE                      |
|                                                                 |
--------------------------------------------------------------- -->

This year I wanted to add a storyline to my annual puzzle treasure hunt. The players would take on in-game identities and would have an element of role-play in the hunt. I had a wide range of ages playing, from 13 to 23 so I would need some elements that were challenging for the older experienced puzzle solvers and some elements that were fun for the 13 year olds. I like physical puzzles because online components would be unfavorably compared to high end video-games, so I use online components sparingly and only where they fit into the story. Finally I also wanted to include a cooperative puzzle or game that they had to work on together.

This write-up will present each clue in the order the players found them with the answers hidden as much as possible. I challenge you to play along and solve the puzzles yourself. One tip is many of the answers will be simple names of locations or things in my house that my family would know, for example: "fireplace" or "broccoli box" would direct them to those locations in the house. So be prepared to solve for simple words that are only meaningful in directing you to a location in a house.

At the end I will also go into more detail in how I created some of the puzzles to help you if you want to use these ideas in your own puzzle treasure hunt.

# THE HUNT

<div id="section_1">

The family gathered under the Christmas tree on Christmas morning and opened presents. One by one gifts were opened until a strange plain wrapped gift was found addressed _"From: Agent Gigachad of C.H.A.O.S. with love to: Dear Comrades of Mission Improbable Team"_. My kids tore the gift wrapper off to reveal a clear plexi-glass case with a bomb inside. The bomb consisted of three sticks of dynamite, some attached electronics, and a countdown timer showing only three hours until it went off. The case was locked by a latch with a three number combination lock.

<div class="image-container">
<img src="/images/puzzle2023-bomb-wrapped.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-bomb-in-case.jpg" onclick="openModal(this.src)">
</div>

The players also had noticed strange colorful signs placed on all the internal doors in the house. They didn't know what to do with them yet.

<div class="image-container">
<img src="/images/puzzle2023-doorsign-2.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-doorsign-1.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-doorsign-all.jpg" onclick="openModal(this.src)">
</div>

After a few moments examining the bomb case, they were interrupted by a group text message sent to all of them from an unknown number "Your FEDEX package has been delivered." with a photo of a FEDEX package leaning on the front door.

<div class="image-container">
<img src="/images/puzzle2023-fedex-box.jpg" onclick="openModal(this.src)">
</div>

This is how the puzzle treasure hunt started. You can try to solve the puzzles yourself, or you can read all the solutions. Keep in mind my players are very experienced and have been solving my puzzles for years. It may take you a lot longer than three hours to solve it.
<br>

<div class="answer_div">
<button onclick="revealSectionAndPlay('section_2', 'intro_player')" >I want to solve the puzzles myself</button>
<button onclick="showEverything()">I just want to read all the solutions</button>
</div>

</div>

<div id="section_2" class="hidden">

<audio id="intro_player" controls>
  <source src="/images/puzzle2023-intro-audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

They brought the package in and opened it. Inside was a set of Secret Agent Dossiers on each of the players telling them their Secret Agent Codenames and background (Agents Petabyte, Jigsaw, Quantum, Skyfall, Moriarty, Cipher and Jade). Also inside was a recipe for _"Spirit of Hartshorn Pie"_ with a Polaroid photo paperclipped to the recipe with a photo of an unconscious man lying in the London Tube with the note 'Agent GigaChad of C.H.A.O.S. - Conspiracy of Henchmen and Agents Operating in Secret'. As soon as the FEDEX box was opened a recorded voice message began playing. By closing and reopening the box they could replay the audio message.

> Good morning Mission Improbable Team. An agent of C.H.A.O.S. accidentally slipped on a banana in a London tube station and was knocked unconscious. Our agents had been following him and were able to recover a secret communique he was delivering to C.H.A.O.S. We know C.H.A.O.S. has built a nuclear weapon fuel enrichment operation. You must use the intercepted communique to track down the location of their nuclear lab and disable it. Beware: C.H.A.O.S. has discovered that we intercepted the communique and has planted a bomb in our embassy. The bomb is set to go off after a timer runs out. It cannot be removed from the embassy without triggering a GPS based booby-trap. You must also find and defuse this bomb.
> You will find a dossier on your team members attached. The intercepted communique looks innocent but we have reason to believe it holds the key to finding their operation.
> This mission will be dangerous. If you are caught or detected your safety cannot be guaranteed. If any of your Mission Improbable Team are caught, the Secretary of the United States will disavow any knowledge of your actions to avoid an international incident. After disabling the nuclear fuel operation you must send their secret project codename to us at MI headquarters. The method for sending us the project codename is... _MESSAGE INTERRUPTED. CARRIER LOST. MESSAGE TERMINATED PREMATURELY._

<div class="image-container">
<img src="/images/puzzle2023-dossiers.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-dossiers-solving.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-recipe.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-recipe-closeup.png" onclick="openModal(this.src)">
<img src="/images/puzzle2023-fedex-solving.jpg" onclick="openModal(this.src)">
</div>

Now you have everything you need to solve... something. When you're ready enter the solution.

<div class="answer_div">
<label for="answer_3">Enter solution here:</label>
<input type="text" id="answer_3" placeholder="here">
<button onclick="checkSolution(3)">Check</button>
<span id="feedback_3"></span>
<div class="spacer"></div>
<button onclick="showHint(3)">Hint</button>
</div>

</div>

<div id="section_3" class="hidden">

The quantity numbers in the recipe are indexes to select a single letter from each ingredient. Selecting one letter from each ingredient spelled out 'FEDEXTRACKINGNUM'.

Now what's next?

<div class="answer_div">
<label for="answer_4">Enter solution here:</label>
<input type="text" id="answer_4" placeholder="here">
<button onclick="checkSolution(4)">Check</button>
<span id="feedback_4"></span>
<div class="spacer"></div>
<button onclick="showHint(4)">Hint</button>
</div>

</div>

<div id="section_4" class="hidden">

The players looked at the Fedex Tracking number and noticed that all of the letters are also the first letters of their Agent Code names. They used the numbers as indexes into their Agent Code names to spell out 'INOLDHEATUNIT'. 

In the old unused heater unit in the house the players found a large graphic poster of a collectibles toy box filled with Hot-Wheels cars with some unusual elements.

<div class="image-container">
<img src="/images/puzzle2023-hotwheels-solving.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-hotwheels-closeup.png" onclick="openModal(this.src)">
</div>

What is this poster telling you?

<div class="answer_div">
<label for="answer_5">Enter solution here:</label>
<input type="text" id="answer_5" placeholder="here">
<button onclick="checkSolution(5)">Check</button>
<span id="feedback_5"></span>
<div class="spacer"></div>
<button onclick="showHint(5)">Hint</button>
</div>

</div>

<div id="section_5" class="hidden">

Some of the cars have numbers on them. The numbers go exactly from 1-8. The players got the idea that the answer could have 8 letters and each car indicates one of the letters. Each car location could represent a letter. But which locations are which letters? They counted the cells and there were 36. Too many for just 26 letters. But 26 letters and ten numbers would fit perfectly. Where to start? They could try many different combinations 0-9A-Z or A-Z0-9, but there were clues. The donuts mark the 0 (zero) and O (oh) and the little bee marked the letter B. The cars spelled out 2NDPBJAR. 
In the cabinet where Peanut Butter jars are usually kept, behind a full Peanut Butter jar, the players found a clean empty Peanut Butter jar in the back with an ID-BADGE inside it.

<div class="image-container">
<img src="/images/puzzle2023-idbadge-front.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-idbadge-back.jpg" onclick="openModal(this.src)">
</div>

Now what? _(Note: I had to modify this one to work remotely. If it doesn't work, enter 'IGIVEUP')_

<div class="answer_div">
<label for="answer_6">Enter solution here:</label>
<input type="text" id="answer_6" placeholder="here">
<button onclick="checkSolution(6)">Check</button>
<span id="feedback_6"></span>
<div class="spacer"></div>
<button onclick="showHint(6)">Hint</button>
</div>

</div>

<div id="section_6" class="hidden">

There is a QR Code on the back of the ID-BADGE. When the players scanned the QR Code they got a simple display of a large number on their phone screen. After a few moments of confusion, they noticed that each player had a slightly different number, and the numbers changed when they moved around. They soon realized that the number got smaller when they went in a certain direction, and they all followed that direction. This led them out of the house and down the street about a block away until they were standing in front of a sign in front of a park. At that point the screens changed to a photo of an altered version of the park sign.

<div class="image-container">
<img src="/images/puzzle2023-gpshunt.png" style="border:1px black solid" onclick="openModal(this.src)">
<img src="/images/puzzle2023-parksign-real.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-parksign-code.png" onclick="openModal(this.src)">
</div>

I tried to replicate this for you, remote puzzler, by starting with your location and sending you 700 feet to the East. I hope it worked, but it's possible you live on the edge of a cliff and had to enter IGIVEUP to move on.

<div class="answer_div">
<label for="answer_7">Enter solution here:</label>
<input type="text" id="answer_7" placeholder="here">
<button onclick="checkSolution(7)">Check</button>
<span id="feedback_7"></span>
<div class="spacer"></div>
<button onclick="showHint(7)">Hint</button>
</div>

</div>

<div id="section_7" class="hidden">

The real park sign has writing on it. The image on the phones has the same sign but the letters have changed and don't spell anything sensible anymore. If you use the fake letters as offsets (A = +1, B = +2 etc.) and add each offset in turn to each real sign letter you will spell out the solution "MAILROOMBOXONECOMMATHREE". In coding terms, the fake lettes are a one-time-pad.

The next puzzle is tricky to do remotely. I'll give away a hint that you'll need your own version of the red transparent filter labeled "Retina Scanner" on the ID Badge. If you can find a red transparent filter go ahead and solve the next puzzle. Otherwise enter 'IGIVEUP'.

<div class="answer_div">
<label for="answer_8">Enter any of the solution words (except for MAILROOM) here:</label>
<input type="text" id="answer_8" placeholder="here">
<button onclick="checkSolution(8)">Check</button>
<span id="feedback_8"></span>
<div class="spacer"></div>
<button onclick="showHint(8)">Hint</button>
</div>

</div>

<div id="section_8" class="hidden">

<div class="image-container">
<img src="/images/puzzle2023-doorsign-solved.jpg" onclick="openModal(this.src)">
</div>

The red transparent filter on the ID Badge lets you read the hidden writing on the door signs. The players entered the room labeled "MAILROOM" and found a chest with 2 rows of 3 drawers.
Click on the chest:
<div class="image-container">
<img src="/images/puzzle2023-mailboxes.jpg" onclick="revealSection('section_9')">
</div>

</div>

<div id="section_9" class="hidden">

Within drawer number 1,3 of the chest the players found two keys and a wire-cutter. You may need to print out the keys and cut them out to solve this one.

<div class="image-container">
<img src="/images/puzzle2023-keys.jpg" onclick="openModal(this.src)">
</div>

<br>

<div class="answer_div">
<label for="answer_10">Enter solution here:</label>
<input type="text" id="answer_10" placeholder="here">
<button onclick="checkSolution(10)">Check</button>
<span id="feedback_10"></span>
<div class="spacer"></div>
<button onclick="showHint(10)">Hint</button>
</div>

</div>

<div id="section_10" class="hidden">

The two keys are a template, when the keys are placed together the key "fingers" create the number "474". This three digit code is the code to open the bomb case!

<div class="image-container">
<img src="/images/puzzle2023-keys-solved.jpg" onclick="openModal(this.src)">
</div>

The players ran back to the Christmas tree where the bomb timer was running out. They used the code from the keys to open the plexi-glass case and took out the bomb assembly. Using the wire cutters they snipped the red wire and the countdown stopped! The youngest players did the bomb cutting and loved this part!

<div class="image-container">
<img src="/images/puzzle2023-bomb-solving.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-bomb-closeup.png" onclick="openModal(this.src)">
</div>

On close inspection of the dynamite, they found it was "MADE IN WEAPONS LAB BEHIND EMBASSY MAILROOM". They rushed back to the "MAILROOM" and out the back door to the patio. There they found a frame with danger warning signs and a radioactive Plutonium cannister in a slot in the center. There was a section off to the side with a slot marked 'SAFE ZONE'. There were four wires running from the Plutonium cannister to the four corners of the frame with four handles attached. A sign told them they could not reach into the frame until the radioactive Plutonium was safely placed in the SAFE ZONE. With four players controlling each handle, they were able to coordinate their movements to lift the Plutonium cannister out of the center and move it to the slot in the safe zone.

Once in the safe zone, they were able to pick up the cannister and look through a viewing window to see the words "PROJECT ORION" labelled inside it.

<div class="image-container">
<img src="/images/puzzle2023-nuclear-solving.png" onclick="openModal(this.src)">
<img src="/images/puzzle2023-nuclear-closeup.jpg" onclick="openModal(this.src)">
<img src="/images/puzzle2023-nuclear-solved.jpg" onclick="openModal(this.src)">
</div>

Enter the location or room where the prize (token of appreciation) is located:

<div class="answer_div">
<label for="answer_11">Enter solution here:</label>
<input type="text" id="answer_11" placeholder="here">
<button onclick="checkSolution(11)">Check</button>
<span id="feedback_11"></span>
<div class="spacer"></div>
<button onclick="showHint(11)">Hint</button>
</div>

</div>

<div id="section_11" class="hidden">

The players found out the name of the C.H.A.O.S. project. They remembered that the audio message in the beginning told them they needed to get the name of the project to Headquarters to complete their mission. On the FEDEX box address there was a URL to MissionImprobable HQ. Going to that URL the players found a cryptic web page with no instructions. _Note: If you entered IGIVEUP and haven't solved it yet, try to solve it now with this hint. You'll hear an audio message when you solve it_.

<div class="image-container">
<img src="/images/puzzle2023-morseapp.png" style="border:1px black solid" onclick="openModal(this.src)">
</div>

Enter the location or room where the prize is located again to continue:

<div class="answer_div">
<label for="answer_12">Enter solution here:</label>
<input type="text" id="answer_12" placeholder="here">
<button onclick="checkSolution(12)">Check</button>
<span id="feedback_12"></span>
</div>

</div>

<div id="section_12" class="hidden">

You found the prize!
<div class="image-container">
<img src="/images/puzzle2023-treasure.jpg" style="border:1px black solid" onclick="revealSectionAndPlay('section_13','victory_player')">
</div>
Click it to open!

</div>

<div id="section_13" class="hidden">

<audio id="victory_player" controls>
  <source src="/images/puzzle2023-victory-audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

The players found that by pressing the green button for a short or long time they were entering Morse Code. By entering the project name "ORION" they were able to solve the final puzzle and hear the congratulations message.

> Congratulations. You have stopped Project Orion and set their nuclear project back years. This is a great victory and has made the world safer. Thank you for your service. You will find a token of our appreciation in the treasure chest in the Embassador's Room.

The players used the ID-BADGE red filter to find the 'EMBASSADORS ROOM' and open the Treasure Chest to reveal a matching set of T-Shirts for everyone with the MISSION IMPROBABLE TEAM's Agent Dossiers on them.

<div class="image-container">
<img src="/images/puzzle2023-tshirt.jpg" onclick="openModal(this.src)">
</div>

Thank you for playing along. I hope you enjoyed it.

# BEHIND THE SCENES

I got the idea for the theme and story when the 13 year olds loved a spy movie, so I wanted to replicate some of that feeling. My initial inspiration was just the image of them defusing a bomb by clipping a wire. It's such a classic spy movie trope. I thought about the overall puzzle hunt for a while, and once I had a good idea what I wanted I created the whole thing in about 10 hours total spread over two weeks.

Most everthing was photoshopped together from bits and pieces I found online.

# DESIGNING THE HUNT:

Everything had to fit perfectly, one clue leading to another. So I came up with all the puzzles first, came up with some hiding places, and mapped out a linear sequence from the start to finish. I shuffled the puzzles around a bit until I was happy with the order. Only then could I actually make the puzzles because the solutions had to lead to the next puzzle. Everything served the storyline and the experience I wanted. It had to start with a surprise finding the bomb, have puzzles in the middle, and end with defusing the bomb and the nuclear device.

## THE BOMB:

I built the dynamite out of PVC tubes. I found a dymamite label online and photoshopped a clue on them, printed them out and glued them to the PVC tubes. The countdown timer was an electronic timer I had laying around. I needed to be able to defuse it by clipping a wire, so I soldered wires to the battery holder terminals and brought the batteries outside the case. That way I could set the timer the night before to give them an estimated 3 hours after they opened the "gift" and when they clipped the wire it would cut power and shut off the whole timer. I hot-melt glued useless ends of the wires into the ends of the dynamite. Finally I put the whole assembly in a clear box with a combination lock so they could see the bomb without being to get to it until near the end.

<div class="image-container">
<img src="/images/puzzle2023-bomb-making.jpg" onclick="openModal(this.src)">
</div>

## THE FEDEX BOX

I found a Fedex label online and photoshopped clues onto it, then stuck it on a Fedex box. I bought a <a href="https://www.amazon.com/gp/product/B007EHLBYG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">light-activated greeting card audio recording device</a> and placed it just inside the lid of the box so when the box was opened it would play. I used an online VOIP service (Anveo) to send the text message to the players from a phone number they wouldn't recognize. I used Google text-to-speech to make the audio recording with a cool "radio" voice.

<div class="image-container">
<img src="/images/puzzle2023-fedex-making.jpg" onclick="openModal(this.src)">
</div>

## THE HOTWHEELS

I originally wanted to make this out of an actual curio box and real Hot-Wheels cars, but I ran out of time and photoshopped it instead. It's a shame because the Hot-Wheels cars would've been nice bonus prizes for the kids.

## THE ID-BADGE and the ROOM NAMES

I love visual puzzles where you can see something different depending on how you look at it. I've used invisible ink, water repellent paint, heat and cold activated inks, etc. For this puzzle I got a red transparent filter and drew lines with colored pencils until I found one that dissapears when looked at through the filter. Then I drew all of the room names with other colors and obscured the letters with the dissapearing red pencil that would make it difficult to read until the red filter hid those extra lines. It turned out one of my kids could read the words without the filter, by cleverness or colorblindness. I am a bit colorblind so I should've had someone test my puzzles.

## THE GPS HUNT

For this puzzle I wanted the players to unexpectedly have to leave the house. I wrote a simple Javascript to use their GPS location and guide them to the location of the sign for the next puzzle. I gave them as little clue as possible, just one large number to make discovery that much more delightful. I tried to make the code easy to use and modify. You can <a href="https://github.com/PeterTheobald/GPSHunt">find it here.</a>

## THE PLUTONIUM

I wanted a cooperative element that they would have to work together to solve. I saw a similar but much larger mechanism at the San Francisco Exploratorium and I remembered how much I liked it. So I build this smaller version out of PVC. A magnet holds the Plutonium cannister to the pulley wires. In hind-sight I could have skipped the magnet and hard-wired the wires to the cannister.

## THE MORSE PUZZLE

Another Javascript page to give them a puzzle with very little clue. Just a big RED button and a big GREEN button. Each time they press the RED button, depending on how long they press it they get an audio 'BIP' or 'BEEEEP'. When they complete a Morse code letter it shows up on the screen.

## CONCLUSION

The hardest part is really to predict how hard the puzzles should be to solve in an enjoyable amount of time and to run through it making sure one little typo doesn't stop the hunt at a dead-end. My family has been doing these puzzles for years now and are quite experienced, so I can make them pretty difficult for about a 3 hour hunt. Newcomers may get frustrated with a hunt that lasts more than an hour.

Thanks for reading, and please give me your comments, questions, and thoughts below.

</div>

<hr>

<div id="imageModal">
    <span class="close" onclick="closeModal()">&times;</span>
    <img id="modalImage">
</div>
<div id="hintPopup"><p id="hintText">Hint goes here</p><button onclick="closeHint()">Close</button></div>
<div id="overlay" onclick="closeHint()"></div>


<style>
.hidden { display:none; } /* change this to block to show all for testing */
.image-container { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; padding: 5px;}
.image-container img { margin: 5px; max-height: 20em; width: auto; cursor: pointer; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);}
#imageModal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}
#imageModal img {
    margin: auto;
    display: block;
    max-width: 90%; /* Maximum width */
    max-height: 80vh; /* max height */
}
#imageModal .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}
#hintPopup {
    display: none;
    position: fixed;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #000;
    z-index: 1000;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
#overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}
.answer_div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.spacer { flex-grow: 1; }
input { margin: 0 5px;}
</style>
