---
date: "2024-01-01"
draft: true
title: "Puzzle Hunt 2023 - Mission Improbable"
thumbnail: "puzzle-hunt-2023-cover.png"
categories: [ play ]
tags: [ "puzzles", "treasure-hunts"]
scripts: [ "/js/custom-scripts.js" ]
---
My 2023 Xmas Puzzle Hunt: Mission Improbable

<!--more-->
<!-- DONT CHEAT YOURSELF OF FUN! STOP LOOKING AT THE SOURCE CODE -->
<!-- img dossier gallery w names -->

This year I wanted to add a storyline to my annual puzzle treasure hunt. The players would take on in-game identities and could have an element of role-play in the hunt. I had a wide range of ages from 13 to 23 so I would need some elements that were challenging for the older experienced puzzle solvers and some elements that were fun for the 13 year olds. I like physical puzzles because online components will be unfavorably compared to high end video-games, so I use online components sparingly and only where they fit into the story. Finally I also wanted a cooperative puzzle or game that they had to work on together in order to solve it.

This write-up will present each clue in the order the players found them with the answers hidden behind spoiler-blocks as much as possible. I challenge you to play along and solve the puzzles yourself. One catch is many of the answers will be simple names of locations or things in my house that my family would know, for example: "fireplace" or "broccoli box" would direct them to those locations in the house. So be prepared to solve for simple words that are only meaningful in directing you to a location in a house.

At the end I will also go into more detail in how I created some of the puzzles to help you if you want to use these ideas in your own puzzle treasure hunt.

# THE HUNT

The family gathered under the Christmas tree on Christmas morning and opened presents. One by one gifts were opened until a strange plain wrapped gift was found addressed "From: Agent Gigachad of C.H.A.O.S. with love to: Dear Comrades of Mission Improbable Team". My kids tore the gift wrapper off to reveal a clear plexi-glass case with a bomb inside. The bomb consisted of three sticks of dynamite, some attached electronics, and a countdown timer showing only three hours until it went off. The case was locked by a latch with a three number combination lock.

<!-- imgs of bomb bomb-wrapped, bomb-in-case3, -->

After a moment examining the case, they were interrupted by a group text message sent to all of them from an unknown number "Your FEDEX package has been delivered." with a photo of a FEDEX package leaning on the front door.

<!-- imgs of fedex at door fedex-box -->

CLICK THE FEDEX PACKAGE TO OPEN IT
<!-- onclick reveal next section, autoplay audio recording w replay button. On each click replay audio -->
<img src='xyz' alt="click me" onclick="reveal_section('section2')">

<div id="section2" style="display:none">
They brought the package in and opened it. Inside was a set of Secret Agent Dossiers on each of the players telling them their Secret Agent Codenames and background. Also inside was a detaile recipe for "Spirit of Hartshorn Pie" with a Polaroid photo paperclipped to the recipe with a photo of an unconscious man lying in the London Tube with the note 'Agent GigaChad of C.H.A.O.S. - Conspiracy of Henchmen and Agents Operating in Secret'. As soon as the FEDEX box was opened a recorded voice message began playing. By closing and reopening the box they could replay the audio message.

<!-- imgs of dossiers and recipe : dossiers, dossiers-laughing, dossiers-solving, recipe, recipe-closeup -->

Now you have everything you need to solve... something. When you're ready enter the solution here: 

<!-- solution box -->
<label for="solution3">Enter solution here:</label>
<input type="text" id="solution3" placeholder="here">
<button onclick="checkSolution(3)">Submit</button>
<span id="feedback"></span>

(no, keep trying)
FEDEXTRACKINGNUM: Correct! Now what's next?
-->
</div>

<div id="section3" style="display:none">
The numbers in the recipe are indexes to select a single letter from each ingredient. 
Now what's next? Enter solution:

<!-- solution box:
(no, keep trying)
INOLDHEATERUNIT: Correct! You've unlocked the next clue. (reveal next section)
-->
</div>

The players looked at the Fedex Tracking number and noticed that all of the letters are also the first letters of their Agent Code names. The Fedex tracking number is the first letter of each team member's code name and an index to select a letter from that name.

In the old decommissioned heater unit the players found a large graphic of a collectibles toy box filled with Hot-Wheels cars with some unusual elements.
<!-- img of hotwheels hotwheels-finding hotwheels-solving, hotwheels-closeup -->

Enter solution here:
<!-- solution box:
(no, keep trying)
2NDPBJAR: Correct! (reveal next section)
-->

Some of the cars have numbers on them. The numbers go exactly from 1-8. The players got the idea that each cell could represent a letter and the cards numbers give the order. But which letters go in which box? They counted the cells and there were 36. Too many for just 26 letters. But 26 letters and ten numbers would fit perfectly. Where to start? They could try many different combinations, but there were clues. The donuts mark the 0 (zero) and O (oh) and the little bee marked the letter B. So the cars spelled out 2NDPBJAR. 
In the cabinet where Peanut Butter jars are usually kept, the players found a clean empty Peanut Butter jar in the back with an ID-BADGE inside it behind a full Peanut Butter jar.

<!-- imgs of IDBADGE badge-front, badge-back -->
<!-- badge has url to gps-hunt webpage. This special version gets the players location on start, then sets the target location to 700 feet to the East. When they get within 5 feet it displays the ANSWER KEYWORD IS: LOCATION. This may or not be possible if the player lives by the ocean or a cliff etc. -->

Enter solution here:
<!-- solution box:
(no, keep trying or enter IGIVEUP to skip)
LOCATION: Correct! (reveal next section)
IGIVEUP: (reveal next section)
-->

There is a QR Code on the back of the ID-BADGE. When the players scanned the QR Code they got a simple display of a large number on their phone screen. After a few moments of confusion, they noticed that each player had a slightly different number, and the numbers changed when they moved around. They soon realized that the number got smaller when they went in a certain direction, and they all followed the direction that led to the number getting smaller and smaller. This led them out of the house and down the street about a block away until they were standing in front of a sign in front of a park. At that point the screens changed to a photo of an altered version of the park sign.

I tried to replicate this for you remote puzzler by starting with your location and sending you 700 feet to the East. I hope it worked, but it's possible you live on the edge of a cliff and had to enter IGIVEUP to move on.

<!-- imgs of PARKSIGN parksign-real, parksign-fake -->

Enter solution here:
<!-- solution box:
(no, keep trying)
MAILROOMBOXONECOMMATHREE: Correct! (reveal next section)
-->

The real park sign has writing on it. The image on the phones has the same sign but the letters have changed and don't spell anything sensible anymore. If you use the fake letters as offsets (A=+1, B=+2 etc.) and add each one in turn to the real sign letter you will spell out the solution "MAILROOMBOXONECOMMATHREE". In coding terms, the fake lettes are a one-time-pad.

The players noticed earlier that signs with colorful gibberish were placed on all of the internal house doors. They could look through the translucent red filter on the ID-BADGE to see actual room names on the signs. At the time the room names weren't useful to them, but now "MAILROOM" makes sense! If you can find a translucent red sheet of the exact same color to look through, you may be able to read the room names. If you can, enter MAILROOM, otherwise enter IGIVEUP.

<!-- img of ROOM SIGNS roomsign1, roomsign2, roomsign-all -->

Enter solution here:
<!-- solution box:
MAILROOM:
IGIVEUP:
-->

<!-- img of ROOM NAMES through filter roomsign-solve -->

The players entered the "MAILROOM" and found a storage unit with 2 rows of 4 drawers.
Click on drawer:
<!-- img of storage-unit,
click on wrong drawer: No, try again.
click on 1,3: Correct! reveal next section -->

Within drawer number 1,3 the players found two keys and a wire-cutter. You may need to print out the keys and cut them out to solve this one.

<!-- img of keys -->

Enter solution here:
<!-- solution box:
wrong: no, try again.
474 or 4,7,4: Correct! reveal next section
-->

The two keys are a template, when the keys are placed together the key "fingers" outline the number "474". This three digit code is the code to open the bomb case!
<!-- img of keys-solve -->

The players ran back to the Christmas tree where the bomb timer was running out. They used the code from the keys to open the plex-glass box and took out the bomb assembly. Using the wire cutters they snipped the red wire and the countdown stopped! The youngest players did the bomb cutting and loved this part!

<!-- img of close up details of bomb bomb-solving, bomb-closeup -->

On close inspection of the dynamite, they found it was "MADE IN WEAPONS LAB BEHIND EMBASSY MAILROOM". They rushed back to the "MAILROOM" and out the back door to the patio. There they found a frame with danger warning signs and a radioactive Plutonium cannister in a slot in the center. There was a section off to the side with a slot marked 'SAFE ZONE'. There were four wires running from the Plutonium cannister to the four corners of the frame with four handles attached. A sign told them they could not reach into the frame until the radioactive Plutonium was safely placed in the SAFE ZONE. With four players controllign each handle, they were able to coordinate their movements to lift the Plutonium cannister out of the center and move it to the slot in the safe zone.

Once in the safe zone, they were able to pick up the cannister and look through a viewing window to see the words "PROJECT ORION" labelled inside it.

<!-- img of nuclear-montage, nuclear-closeup, plutonium-closeup -->

Enter the location or room where the prize (token of appreciation) is located:
<!-- solution box:
treasurechest, treasure chest, embassador, embassadors room: reveal next
igiveup
--->

The players now had the name of the project. They remembered that the audio message in the beginning told them they needed to get the name of the project to Headquarters to complete their mission. On the FEDEX box address there was a URL to MissionImprobable HQ. Going to that URL the players found a cryptic web page with no instructions. If you haven't solved it yet, try it now to hear the congratulations message.

Enter the location or room where the prize is located again to continue:
<!-- solution box:
treasurechest, treasure chest, embassador, embassadors room: reveal next
igiveup
--->

The players found that by pressing the green button for a short or long time they were entering Morse Code. By entering the project name "ORION" they were able to solve the final puzzle and hear the congratulations message.

<!-- click play to hear message -->

The players used the ID-BADGE template to find the 'EMBASSADORS ROOM' and open the Treasure Chest to reveal a matching set of T-Shirts for everyone with the MISSION IMPROBABLE TEAM's Agent Dossiers on them.

<!-- img of tshirt -->

Thank you for playing along. I hope you enjoyed it.

# BEHIND THE SCENES

I got the idea for the theme and story when the 13 year olds loved a spy movie, so I wanted to replicate some of that feeling. My initial inspiration was just the image of them defusing a bomb by clipping a wire. It's such a classic spy movie trope. I thought about the overall puzzle hunt in the fall, and once I had a good idea what I wanted I created the whole thing in about 10 hours total spread over two weeks.

Most everthing was photoshopped together from bits and pieces I found online.

# DESIGNING THE HUNT:

Everything had to fit perfectly, one clue leading to another. So I came up with all the puzzles first, came up with some hiding places, and mapped out a linear sequence from the start to finish. I shuffled the puzzles around a bit until I was happy with the order. Only then could I actually make the puzzles because the solutions had to lead to the next puzzle. Everything served the storyline and the experience I wanted. It had to start with surprise finding the bomb, have puzzles in the middle, and end with defusing the bomb and the nuclear device.

## THE BOMB:

I build the dynamite out of PVC tubes. I found a dymamite label online and photoshopped a clue on them, printed them out and glued them to the PVC tubes. The countdown timer was an electronic timer I had laying around. I needed to be able to defuse it by clipping a wire, so I soldered wires to the battery holder terminals and brought the batteries outside the case. That way I could set the timer the night before to give them about 3 hours after they opened the "gift" and when they clipped the wire it would cut power and shut off the whole timer. I glued on an old computer PCI card I had to add some cool electronics. I hot-melt glued useless ends of the wires into the ends of the dynamite. Finally I put the whole assembly in a clear box with a combination lock so they could see the bomb without being to get to it until near the end.

## THE FEDEX BOX

I found a Fedex label online and photoshopped clues onto it, then stuck it on a Fedex box. I bought a light-activated greeting card audio recording device and placed it just inside the lid of the box so when the box was opened it would play. I used an online VOIP service (Anveo) to send the text message to the players from a phone number they wouldn't recognize. I used Google text-to-speech to make the audio recording with a cool "radio" voice.

## THE HOTWHEELS

I originally wanted to make this out of an actual curio box and real Hot-Wheels cars, but I ran out of time and photoshopped it instead. It's a shame because the Hot-Wheels cars would've been nice bonus prizes for the kids.

## THE ID-BADGE and the ROOM NAMES

I love visual puzzles where you can see something different depending on how you look at it. I've used invisible ink, water repellent paint, heat and cold activated inks, etc. For this puzzle I got a translucent red filter and drew lines until I found a colored pencil that dissapears when looked at through the filter. Then I drew all of the room names with other colors and obscured the letters with the dissapearing red pencil that would make it difficult to read until the red filter hid those extra lines.

## THE GPS HUNT

For this puzzle I wanted the players to unexpectedly have to leave the house. I wrote a simple Javascript to use their GPS location and guide them to the location of the sign for the next puzzle. I gave them as little clue as possible, just one large number to make discovery that much more delightful.

## THE PLUTONIUM

I wanted a cooperative element that they would have to work together to solve. I saw a similar but much larger mechanism at the San Francisco Exploratorium and I remembered how much I liked it. So I build this smaller version out of PVC. A magnet holds the Plutonium cannister to the pulley wires. In hind-sight I could have skipped the magnet and hard-wired the wires to the cannister.

## THE MORSE APP

Another Javascript page to give them a puzzle with very little clue. Just a big GREEN buttn and a big RED button. Each time they press the GREEN button, depending on how long they press it they get an audio 'BIP' or 'BEEEEP'. When they complete a Morse code letter it shows up on the screen. 



<script>
function reveal_section(s) {
  var section=document.getElementById(s);
  section.style.display='block';
}
function check_solution(n) {
  var input = document.getElementById('solution'+str(n)).value;
  var feedback = document.getElementById('feedback'+str(n));
  var hiddenSection = document.getElementById('section'+str(n));

  if (input.toUpperCase() === 'SOLUTION') {
    feedback.textContent = 'Correct!';
    hiddenSection.style.display = 'block'; // Reveal the hidden section
  } else {
    feedback.textContent = 'No, try again';
    hiddenSection.style.display = 'none'; // Ensure hidden section is not shown
    }
  }
}

</script>

