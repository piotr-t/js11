
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
        return palindroms[0];
    }
}

let bf = new palindromicSubstring("karakis");
// console.log(bf);

//3) Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’

class commonSubsequence {
    constructor(str1 = '', str2 = '') {
        this.str1 = str1;
        this.str2 = str2;
        this.str3 = [];

        for (let w = 0; w < this.str1.length; w++) {
            if (this.str2.includes(this.str1.slice(w))) {
                this.str3.push(this.str1.slice(w));
            }
            if (this.str2.includes(this.str1.slice(0, - w)) && w !== 0) {
                this.str3.push(this.str1.slice(0, - w));
            }
        };
        this.str4 = this.str3.slice(0, 1);
        return this.str4;
    }
}
let tr = new commonSubsequence("fgfgrrerere", "fgff");

//4)

class transformText {
    constructor(text1, text2) {
        this.text1 = text1;
        this.text2 = text2;
        this.text = [...this.text2].reduce((prev, curr, index) => {
            //          console.log("  index:", index, "  prev:", prev, "  curr:", curr);
            return curr === prev[index] ? prev : prev.substring(0, index) + this.text2[index] + prev.substr(index);
        }, this.text1).substring(0, text2.length);
    }
}

let tre = new transformText("zając", "ferie");

//5) 

class twoMatrixes {

    constructor(matrix1, matrix2) {

        this.matrix = [];
        let matrix1Dimension = matrix1[0].length;
        if ((matrix1Dimension === matrix2.length) && Array.isArray(matrix1) && Array.isArray(matrix2)) {
            for (let l = 0; l < matrix1.length; l++) {
                this.matrix.push([]);
                for (let m = 0; m < matrix2[0].length; m++) {
                    this.matrix[l][m] = matrix1[l].reduce((prev, curr, index) => {
                        return prev + curr * matrix2[index][m];
                    }, 0);

                }
            }
        } else console.log("wrong matrixes dimension");

    }
}

let mat1 = [
    [2, 1, 3],
    [-1, 2, 4]];


let mat2 = [
    [1, 3],
    [2, -2],
    [-1, 4]];

let mat = new twoMatrixes(mat1, mat2);
console.log(mat);
