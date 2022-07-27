// Desafio 1

function compareTrue(t, f) {
  if (t && f === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, false));

// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));

// Desafio 3

function splitSentence(word) {
  return word.split(' ', -1);
}
console.log(splitSentence('go Trybe'));

// Desafio 4

function concatName(words) {
  let first = words.shift();
  let last = words.pop();
  words = `${last}, ${first}`;
  return words;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5

function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
console.log(footballPoints(14, 8));

// Desafio 6

function highestCount(a) {
  let max = Math.max.apply(null, a);
  let qnt = 0;
  for (let i of a) {
    if (i === max) {
      qnt += 1;
    }
  }
  return qnt;
}

console.log(highestCount([1, 5, 5, 4]));

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(10, 5, 6));

// Desafio 8

function fizzBuzz(number) {
  for (let index in number) {
    if (number[index] % 3 === 0 && number[index] % 5 === 0) {
      number[index] = 'fizzBuzz';
    } else if (number[index] % 3 === 0) {
      number[index] = 'fizz';
    } else if (number[index] % 5 === 0) {
      number[index] = 'buzz';
    } else {
      number[index] = 'bug!';
    }
  }
  return number;
}

// Desafio 9

function encode(word) {
  let newArray = [''];
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === 'a') {
      newArray[i] = 1;
    } else if (word[i] === 'e') {
      newArray[i] = 2;
    } else if (word[i] === 'i') {
      newArray[i] = 3;
    } else if (word[i] === 'o') {
      newArray[i] = 4;
    } else if (word[i] === 'u') {
      newArray[i] = 5;
    } else {
      newArray[i] = word[i];
    }
  }
  return newArray.join('');
}
console.log(encode('Mariana'));

function decode(newWord) {
  let newCaracter = [''];
  for (let i = 0; i < newWord.length; i += 1) {
    if (newWord[i] === '1') {
      newCaracter[i] = 'a';
    } else if (newWord[i] === '2') {
      newCaracter[i] = 'e';
    } else if (newWord[i] === '3') {
      newCaracter[i] = 'i';
    } else if (newWord[i] === '4') {
      newCaracter[i] = 'o';
    } else if (newWord[i] === '5') {
      newCaracter[i] = 'u';
    } else {
      newCaracter[i] = newWord[i];
    }
  }
  return newCaracter.join('');
}

console.log(decode('H2ll4'));

// Desafio 10

function techList(array, string) {
  if (array.length == [] || string.length == '') {
    return 'Vazio!';
  }
  let objetos = [];
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    objetos.push({ tech: array[i], name: string });
  }
  return objetos;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'José'));
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
