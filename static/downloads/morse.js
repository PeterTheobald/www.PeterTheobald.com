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

document.getElementById("redButton").addEventListener("mousedown", function() {
    buttonPressTime = new Date(); // Record the time when the button is pressed
    clearTimeout(endOfLetterTimeout); // Clear the end-of-letter timeout
});

document.getElementById("redButton").addEventListener("mouseup", function() {
    const pressDuration = new Date() - buttonPressTime;
    if (pressDuration < 500) {
        currentInput += ".";
        document.getElementById("morse-dot").play(); // Play dot sound
    } else {
        currentInput += "-";
        document.getElementById("morse-dash").play(); // Play dash sound
    }

    // Set a timeout for end of a letter
    endOfLetterTimeout = setTimeout(function() {
        const letter = morseCode[currentInput] || "";
        currentWord += letter;
        document.getElementById("inputDisplay").innerText = currentWord;
        currentInput = "";
    }, 750); // 0.75 seconds for end of a letter
});

document.getElementById("greenButton").addEventListener("click", function() {
    if (currentWord === "ORION") {
        document.getElementById("resultDisplay").innerText = "SUCCESS";
    } else {
        document.getElementById("resultDisplay").innerText = "CODE NOT RECOGNIZED";
    }
    currentWord = ""; // Clear the current word
    document.getElementById("inputDisplay").innerText = currentWord; // Update the display
});
