import {Translator} from "./translator.js";

const englishAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];

// DOM ELEMENT SELECTORS (classes)
const inputTextBox = document.querySelector(".input-text")
const outputText = document.querySelector(".output-text")
const translateToEnglishButton = document.querySelector(".english-button")
const translateToMorseButton = document.querySelector(".morse-button")
const morseDotButton = document.querySelector(".dot-button")
const morseDashButton = document.querySelector(".dash-button")
const morseSpaceButton = document.querySelector(".space-button")
const morseNewWordButton = document.querySelector(".new-word-button")
const morseClearButton = document.querySelector(".clear-button")

// create morse objects to be used
const englishToMorseTranslator = new Translator ("", " ", englishAlphabet, morseAlphabet, " ", "/")
const morseToEnglishTranslator = new Translator (" ", "", morseAlphabet, englishAlphabet, "/", " ")

// translate functions
const translateToMorse = () => outputText.innerHTML = englishToMorseTranslator.translate(inputTextBox.value)
const translateToEnglish =  () => outputText.innerHTML = morseToEnglishTranslator.translate(inputTextBox.value)

// event listeners => trigger relevant functions then trigger translate function within object
translateToMorseButton.addEventListener("click", (translateToMorse))
translateToEnglishButton.addEventListener("click", (translateToEnglish)) 

// Morse buttons event listners
morseDotButton.addEventListener("click", () => inputTextBox.value += ".")
morseDashButton.addEventListener("click", () => inputTextBox.value += "-")
morseSpaceButton.addEventListener("click", () => inputTextBox.value += " ")
morseNewWordButton.addEventListener("click", () => inputTextBox.value += "/")
morseClearButton.addEventListener("click", () => inputTextBox.value = "")