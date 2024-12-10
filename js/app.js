const textoMorse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    Ñ: "--.--",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    ";": "-.-.-.",
    "/": "-..-.",
}; 

const morseTexto = {
    ".-"        :A,
    "-..."      :B,
    "-.-."      :C, 
    "-.."       :D,
    "."         :E,
    "..-."      :F,
    "--."       :G,
    "...."      :H,
    ".."        :I,
    ".---"      :J,
    "-.-"       :K,
    ".-.."      :L,
    "--"        :M,
    "-."        :N,
    "--.--"     :Ñ,
    "---"       :O,
    ".--."      :P,
    "--.-"      :Q,
    ".-."       :R,
    "..."       :S,
    "-"         :T,
    "..-"       :U,
    "...-"      :V,
    ".--"       :W,
    "-..-"      :X,
    "-.--"      :Y,
    "--.."      :Z,
    0: "-----",
    1: ".----",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    ";": "-.-.-.",
    "/": "-..-.",
}; 



document.getElementById("translate").addEventListener("click", function() {            
    const input = document.getElementById("initialText").value.toUpperCase();
    let textTranslate = ""
    for (let letra of input){
        if (textoMorse[letra]) {
            textTranslate += textoMorse[letra] + ""
        } else {
            textTranslate += ""
        }
    }

    document.getElementById("textTranslate").innerText = textTranslate
    

})