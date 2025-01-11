const morseCode = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.",
    "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
    "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.",
    "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..",
    "9": "----.", "0": "-----", ".": ".-.-.-", ",": "--..--", "?": "..--..",
    "/": "-..-."
};


function textToMorse(text) {
    let morseMessage = "";
    text = text.toUpperCase(); 
    for (let char of text) {
        if (morseCode[char]) {
            morseMessage += morseCode[char] + " ";
        } else if (char === " ") {
            morseMessage += "/ "; 
        } else {
            return "Error: Ingrese caracteres válidos: " + char;
        }
    }
    return morseMessage.trim(); 
}

function morseToText(morse) {
    let textMessage = "";
    let morseWords = morse.split(" / "); 

    for (let word of morseWords) {
        let wordLetters = word.split(" ");
        for (let morseChar of wordLetters) {
            let letter = Object.keys(morseCode).find(key => morseCode[key] === morseChar);
            if (letter) {
                textMessage += letter;
            } else {
                return "Error: Ingrese un código Morse válido: " + morseChar;
            }
        }
        textMessage += " "; 
    }
    return textMessage.trim(); 
}

document.getElementById("translate").addEventListener("click", function(event) {
    event.preventDefault(); 

    const inputText = document.getElementById("initialText").value;

  
    let translationResult;
    if (inputText.includes(".")) {
    
        translationResult = morseToText(inputText);
    } else {
        
        translationResult = textToMorse(inputText);
    }

    document.getElementById("textTranslate").textContent = translationResult;
});
