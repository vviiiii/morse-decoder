const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = "";
   
    let toMorse = [];
    //transform to morse decode
    for (let i = 0; i < expr.length; i += 2) { // 1 morse symbol == 2 symbols 1 or 0
        let couple = expr.substring(i, i + 2);
        if (couple === '10'){
            toMorse.push('.');
        }else if (couple === '11'){
            toMorse.push('-');
        }else if (couple === '00'){
            toMorse.push('');
        }else if (couple === '**'){
            toMorse.push(' ');
        }
        
    }
    // console.log(toMorse);

    let letters = [];
    //1 letter or number in morse decode == 5 couple of 1 and 0
    for (let i = 0; i < toMorse.length; i += 5) {
        letters.push(toMorse.slice(i,i+5).join(''));
    }

    // console.log(letters);

    for (item of letters){
        // console.log(MORSE_TABLE[item]);
        //transform to sentence
        letter = MORSE_TABLE[item];
        if(letter === undefined){
            result += ' ';
        }else {
            result += letter;
        }
        
    }
    // console.log(result);

    return result;
}

//  decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");
module.exports = {
    decode
}