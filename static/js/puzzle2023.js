function revealSection(s) {
  var section=document.getElementById(s);
  section.style.display='block';
}

function revealSectionAndPlay(s,a) {
  var section=document.getElementById(s);
  section.style.display='block';
  var player=document.getElementById(a);
  player.play()
}

var solutions = [
  ['ANSWER0 N/A'],
  ['ANSWER1 N/A'],
  ['ANSWER2 N/A'],
  ['FEDEXTRACKINGNUM', 'IGIVEUP'],
  ['INOLDHEATUNIT', 'IGIVEUP'],
  ['2NDPBJAR', 'IGIVEUP'],
  ['FOUNDIT', 'IGIVEUP'],
  ['MAILROOMBOXONECOMMATHREE', 'IGIVEUP'],
  ['LOUNGE', 'EMBASSADOR', 'BALLROOM', 'WESTWING', 'IGIVEUP'],
  ['ANSWER9 N/A'],
  ['474', '4,7,4', 'IGIVEUP'],
  ['TREASURECHEST', 'EMBASSADOR', 'EMBASSADORS', 'EMBASSADORSROOM', 'IGIVEUP'],
  ['TREASURECHEST', 'EMBASSADOR', 'EMBASSADORS', 'EMBASSADORSROOM', 'IGIVEUP'],
];

function checkSolution(n) {
  var input = document.getElementById('answer_'+n.toString()).value.toUpperCase().replace(/\s+/g, '').replace(/'/g, '');

  if (input.toUpperCase() === "SHOWEVERYTHING") {
	for (var i=1; i<=15; i++) {
		var sectionId = "section_"+i.toString();
		var sectionElement = document.getElementById( sectionId);
		if (sectionElement) {
			sectionElement.style.display = "block";
		}
	}
	return;
  }
  var feedback = document.getElementById('feedback_'+n.toString());
  var hiddenSection = document.getElementById('section_'+n.toString());
  var validSolutions = solutions[n];
  if (validSolutions.includes(input)) {
    feedback.textContent = ' Good!';
    hiddenSection.style.display = 'block'; // Reveal the hidden section
  } else {
    feedback.textContent = ' No, try again';
    hiddenSection.style.display = 'none'; // Ensure hidden section is not shown
  }
}

function openModal(src) {
     document.getElementById('imageModal').style.display = 'block';
     document.getElementById('modalImage').src = src;
     document.addEventListener('keydown', handleEscKey);
 }

function closeModal() {
     document.getElementById('imageModal').style.display = 'none';
     document.removeEventListener('keydown', handleEscKey);
 }

function handleEscKey(event) {
   // Check if the 'Esc' key is pressed
   if (event.key === "Escape") {
       closeModal();
   }
}

var hint_messages = [
  "Hint 0 N/A",
  "Hint 1 N/A",
  "If you just want to see the answers, enter SHOWEVERYTHING in any answer box. But I encourage you to try solving it instead",
  "Pay attention to the recipe quantities and ingredients.<hr>If you give up enter IGIVEUP to see the answer.<br>If you have no interest in solving the puzzles and just want to read all of the puzzles and answers enter SHOWEVERYTHING, but I encourage you to try to solve them first.",
  "Look at all of the letters in the Fedex Tracking number. Where else do you see that set of letters?",
  "(1) Look at the stickers on the cars.<br>(2) Count how many boxes there are. What else has that many things?<br>(3) After you figure that out, what could the DONUT DONUT and BEE be hinting?",
  "Scan the QR code on the back of the ID Badge. You should see a number on your phone (this will only work on a phone). Now walk around a bit and watch the number. I had to modify this one to work remotely, if it isn't working at all you'll have to enter IGIVEUP.",
  "The park sign has writing on it. The image on your phone shows the same sign with the letters changed. How can you use the changed letters with the real letters?",
  "You need to use the red transparent filter on the ID Badge to view the room signs.",
  "Hint 9 N/A",
  "Print out the keys, cut them out, and physically move them around...",
  "You know the name of the C.H.A.O.S secret project. Now how do you contact Mission Improbable Headquarters? Look at the Fedex Box.",
  ];

function showHint(n) {
	document.getElementById('hintPopup').style.display='block';
	document.getElementById('overlay').style.display='block';
    document.getElementById('hintText').innerHTML=hint_messages[n];
}

function closeHint() {
	document.getElementById('hintPopup').style.display='none';
	document.getElementById('overlay').style.display='none';
}
  
