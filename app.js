
let codeMorsea = {
    A: ".-",
    B: "-.",
    C: "-.-.",
    D: "-.",
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
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-.-",
    Y: "-.--",
    Z: "--..",
    ",": ".-.-.-",
    ".": ".-.-.-",
    "?": "..--..",
};
let codeMorseaKeyNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let codeMorseaKeyValue = [
    '-----',
    '.----',
    '..---',
    '...--',
    '....-',
    '.....',
    '-....',
    '--...',
    '---..',
    '----.'];

class changeText {

    replaceText(text, keyObject, direction = true) {
        let keys = Object.keys(keyObject);
        let keysValues = Object.values(keyObject);
        let entries = Object.entries(keyObject);
        let setDirectionKeys;
        let setDirectionValue;
        let newText = "";

        direction ? setDirectionKeys = 0 : setDirectionKeys = 1;
        direction ? setDirectionValue = 1 : setDirectionValue = 0;

        [...text].forEach(element => {
            element == " " > 1 ? newText += " / " : newText;
            for (let i = 0; i < entries.length; i++) {
                let entries1 = entries[i];
                if (element.toLowerCase() == entries1[setDirectionKeys].toLowerCase()) {
                    newText += " "
                    newText += entries1[setDirectionValue];
                }

            }
        });
        return newText;
    }
}

let chT = new changeText();
// console.log(chT.replaceText(" .--- .- -.- .. ... /  - . -.- ... -", codeMorsea, false));

// 2) Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.

class palindromicSubstring {
    constructor(text) {
        let words = [];
        let palindroms = [];
        let palindrom;
        for (let l = 0; l < text.length; l++) {
            for (let k = text.length; k > l; k--) {
                if (text[l] === text[k]) {
                    words.push(text.slice(l, k + 1));
                    if (k - l == 2) { palindroms.push(text.slice(l, k + 1)) }
                }
            }
        }
        words.forEach(word => {
            let count = Math.floor(word.length / 2);
            let word1 = word.substr(word.length - count);
            let word2 = [...word1].reverse();
            word2 = word2.join("");

            if (word.substr(0, count) === word2) {
                palindroms.push(word);
            }
        })
        palindroms = palindroms.sort((a, b) => b.length - a.length)
        console.log('palindrom', palindroms[0]);
    }
}

let bf = new palindromicSubstring("karakis");




