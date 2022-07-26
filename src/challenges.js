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
  words = `${first}, ${last}`;
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
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    return 'cat1';
  } else if ((Math.abs(mouse - cat1)) > (Math.abs(mouse - cat2))) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(10, 5, 6))

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

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
