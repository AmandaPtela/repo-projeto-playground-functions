// Amanda Karoline
// Desafio 1
let retorno = true;
function compareTrue(a, b){
  if (a !== "Amanda" && b !== "Tássio" || a !== "Amanda" && b == "Tássio"){
    return(retorno = false)}

  else if (a == "Amanda" && b == "Tássio"){
    return(true) }

  else;
}
compareTrue("Amanda", "Tássio")

// Desafio 2 - feito - ok
function calcArea(base, height) {
  const area = (base * height) / 2;
  return (area);
}
calcArea(51, 1);

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
const wins = 12;
function footballPoints() {
  
  // seu código aqui
}

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
