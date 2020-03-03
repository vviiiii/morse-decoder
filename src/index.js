const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function chunkArr(arr, chunk) {
    let resArr = [];
    for (let i = 0; i < arr.length; i += chunk) {
        resArr.push(arr.slice(i, i + chunk));
    }
    return resArr;
}

function decode(expr) {
    // write your solution here
    let result = [];
    let numsArr = chunkArr(expr, 10);
    let lettersArr = numsArr.map(elem => {
        let str = elem.replace(/00/g, '');
        str = str.replace(/10/g, '.');
        str = str.replace(/11/g, '-');
        str = str.replace(/\*\*\*\*\*\*\*\*\*\*/g, '');

        if (str) {
            return MORSE_TABLE[str];
        }
        return ' ';
    });

    return lettersArr.join('');
}
module.exports = {
    decode
}