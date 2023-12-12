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
    if (pressDuration < 500) {
        currentInput += ".";
        document.getElementById("dotSound").play();
    } else {
        currentInput += "-";
        document.getElementById("dashSound").play();
    }

    // Set a timeout for end of a letter
    endOfLetterTimeout = setTimeout(function() {
        const letter = morseCode[currentInput] || "";
        currentWord += letter;
        document.getElementById("inputDisplay").innerText = currentWord;
        currentInput = "";
    }, 750);
}

// Handle both mouse and touch events for desktop and mobile compatibility
const redButton = document.getElementById("redButton");
redButton.addEventListener("mousedown", handleStart);
redButton.addEventListener("touchstart", handleStart, { passive: false });
redButton.addEventListener("mouseup", handleEnd);
redButton.addEventListener("touchend", handleEnd, { passive: false });


document.getElementById("greenButton").addEventListener("click", function() {
    if (currentWord === "ORION") {
        document.getElementById("resultDisplay").innerText = "SUCCESS";
    } else {
        document.getElementById("resultDisplay").innerText = "CODE NOT RECOGNIZED";
    }
    currentWord = ""; // Clear the current word
    document.getElementById("inputDisplay").innerText = currentWord; // Update the display
});
