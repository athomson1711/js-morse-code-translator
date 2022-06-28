// ------
// REMINDER TO TEST USE:
// npm test translator.test.js
// -------
import {Translator} from "./translator";

const englishAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];
const englishToMorseTranslator = new Translator ("", " ", englishAlphabet, morseAlphabet, " ", "/")
const morseToEnglishTranslator = new Translator (" ", "", morseAlphabet, englishAlphabet, "/", " ")

// TO DO
// invalid input test - write if statement within function?

// english -> morse character test "a"
it("should translate a character English => Morse", () => {
    const translateLetter = englishToMorseTranslator.translate("A")
    expect (translateLetter).toBe(".-")
})

// smorse -> english character test "z"
it("should translate Morse Code character => English character", () => {
    const translateCharacter = morseToEnglishTranslator.translate("--..")
    expect (translateCharacter).toBe("z")

})

// -----
// NEED TO TEST FOR NUMBERS AND PUNCTUATION MARKS?
// -----

// test translation of individual words "hello"
it("should translate enlgish word => morse", () => {
    const translateWord = englishToMorseTranslator.translate("Hello")
    expect (translateWord).toBe(".... . .-.. .-.. ---")
})

// test translation on indiviual word "goodbye"
it("should translate morse word => english word", () => {
    const translateWord = morseToEnglishTranslator.translate("--. --- --- -.. -... -.-- .")
    expect (translateWord).toBe("goodbye")
})

// test to translate a sentence (uses "/" to seperate words!!!)
it("should translate a sentence from enlgish => morse", () => {
    const translateSentenceToMorse = englishToMorseTranslator.translate("Bertie the Dog")
    expect (translateSentenceToMorse).toBe("-... . .-. - .. ./- .... ./-.. --- --.")
})

it("should translate a sentence from mnorse => english", () => {
    const translateSentenceToMorse = morseToEnglishTranslator.translate("--. .. -./.- -. -../- --- -. .. -.-.")
    expect (translateSentenceToMorse).toBe("gin and tonic")
})