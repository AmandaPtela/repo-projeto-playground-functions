// Amanda Karoline
// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return (true);
  }

  else if (a === true && b === false) {
    return (false)
  }

  else (a === false && b === false); {
    return (false)
  }
}
compareTrue(true, true);

// Desafio 2 - feito - ok
function calcArea(base, height) {
  const area = (base * height) / 2;
  return (area);
}
calcArea(51, 1);

// Desafio 3

function splitSentence(frase) {
  for (i = 0 ; i <= frase.length; i += 1){
    let splited = frase.split(" ")
  return(splited)}
}
splitSentence("Vamo que vamo")

// Desafio 4
function concatName(palavras, palavras2, palavras3) {
  let concat ;
  for (i = 0; i <= palavras.length; i += 1){
    concat = palavras.slice(-1) + ", " + palavras[0];
    return(concat)}
    for (i = 0; i <= palavras2.length; i += 1){
      concat = palavras2.slice(-1) + ", " + palavras2[0];
      return(concat)}
      for (i = 0; i <= palavras3.length; i += 1){
        concat = palavras3.slice(-1) + ", " + palavras3[0];
        return(concat)}
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], ['foguete', 'não', 'tem', 'ré'], ['captain', 'my', 'captain'])

// Desafio 5
let pontosWins = 3;
let pontosTies = 1;

function footballPoints(wins, ties) {
  let pontosTotal = (wins * pontosWins) + (ties * pontosTies);
  return (pontosTotal)}

footballPoints(14, 8)

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
