const morseCode = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
    "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
    "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
    ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
    "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
    "--..": "Z"
};

let currentInput = "";
let currentWord = "";
let buttonPressTime;
let endOfLetterTimeout;

// Function to disable text selection
function disableTextSelection(element) {
    element.style.userSelect = 'none'; // Standard syntax
    element.style.webkitUserSelect = 'none'; // WebKit/Blink browsers
    element.style.msUserSelect = 'none'; // Internet Explorer/Edge
}

// Disable text selection on buttons
window.onload = function() {
    disableTextSelection(document.getElementById("redButton"));
    disableTextSelection(document.getElementById("greenButton"));
};

function handleStart() {
    buttonPressTime = new Date();
    clearTimeout(endOfLetterTimeout);
}

function handleEnd() {
    const pressDuration = new Date() - buttonPressTime;
    if (pressDuration < 300) {
        currentInput += ".";
        document.getElementById("morse-dot").play();
    } else {
        currentInput += "-";
        document.getElementById("morse-dash").play();
    }

    // Set a timeout for end of a letter
    endOfLetterTimeout = setTimeout(function() {
        const letter = morseCode[currentInput] || "";
        currentWord += letter;
        document.getElementById("inputDisplay").innerText = currentWord;
        currentInput = "";
    }, 750);
}

// Check if touch is supported and use appropriate events
const redButton = document.getElementById("redButton");
if ('ontouchstart' in window) {
    // Touch events for touch-capable devices
    redButton.addEventListener("touchstart", handleStart, { passive: false });
    redButton.addEventListener("touchend", handleEnd, { passive: false });
} else {
    // Mouse events for non-touch devices
    redButton.addEventListener("mousedown", handleStart);
    redButton.addEventListener("mouseup", handleEnd);
}


document.getElementById("greenButton").addEventListener("click", function() {
    if (currentWord === "ORION") {
        document.getElementById("resultDisplay").innerText = "SUCCESS";
		document.getElementById("victory-image").src="victory-image.png";
		document.getElementById("victory-speech").play();
    } else {
        document.getElementById("resultDisplay").innerText = "NAME NOT RECOGNIZED";
    }
    currentWord = ""; // Clear the current word
    document.getElementById("inputDisplay").innerText = currentWord; // Update the display
});
