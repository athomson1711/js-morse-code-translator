export class Translator {

    constructor(seperateChar, joinChar, inputAlphabet, outputAlphabet, seperateWord, joinWord) {
        this.seperateChar = seperateChar;
        this.joinChar = joinChar;
        this.inputAlphabet = inputAlphabet;
        this.outputAlphabet = outputAlphabet;
        this.seperateWord = seperateWord;
        this.joinWord = joinWord;
    }

    // 1. seperate the word into characters 
    // 2. for each character locate it in object and return the value.
    // 3. push that value to the output
    // 4. add a "join" and display translated sentence

    translate(inputTextBox) {
        let output = "";
        const wordsArr = inputTextBox.toUpperCase().split(this.seperateWord);

        wordsArr.forEach((word) => {
            const charactersArr = word.toUpperCase().split(this.seperateChar);
            charactersArr.forEach((character) => {
                let index = this.inputAlphabet.indexOf(character)
                output += this.outputAlphabet[index].toLowerCase() + this.joinChar;
            })
            output = output.trim()
            if (wordsArr.indexOf(word) < (wordsArr.length - 1)) {
                output += this.joinWord
            }
        })
        return output
    }
}