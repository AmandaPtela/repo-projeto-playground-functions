// Amanda Karoline
// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else if (a === true && b === false) {
    return false;
  } else a === false && b === false;
  {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2 - feito - ok
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}
calcArea(51, 1);

// Desafio 3

function splitSentence(frase) {
  for (i = 0; i <= frase.length; i += 1) {
    let splited = frase.split(' ');
    return splited;
  }
}
splitSentence('Vamo que vamo');

// Desafio 4
function concatName(palavras, palavras2, palavras3) {
  let concat;
  for (i = 0; i <= palavras.length; i += 1) {
    concat = palavras.slice(-1) + ', ' + palavras[0];
    return concat;
  }
  for (i = 0; i <= palavras2.length; i += 1) {
    concat = palavras2.slice(-1) + ', ' + palavras2[0];
    return concat;
  }
  for (i = 0; i <= palavras3.length; i += 1) {
    concat = palavras3.slice(-1) + ', ' + palavras3[0];
    return concat;
  }
}
concatName(
  ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'],
  ['foguete', 'não', 'tem', 'ré'],
  ['captain', 'my', 'captain']
);

// Desafio 5
let pontosWins = 3;
let pontosTies = 1;

function footballPoints(wins, ties) {
  let pontosTotal = wins * pontosWins + ties * pontosTies;
  return pontosTotal;
}

footballPoints(14, 8);

// Desafio 6
function highestCount(numeros) {
  let maior = Math.max(...numeros);
  let vezes = 0;

  for (i = 0; i <= numeros.length; i += 1) {
    if (numeros[i] == maior) {
      vezes += 1;
    }
  }
  return vezes;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {}

// Desafio 8
function fizzBuzz(numeross) {
  let resultado = [];

  for (i = 0; i < numeross.length; i += 1) {
    if (numeross[i] % 3 == 0 && numeross[i] % 5 == 0) {
      resultado.push('fizzBuzz');
    } else if (numeross[i] % 5 == 0) {
      resultado.push('buzz');
    } else if (numeross[i] %3 == 0){
      resultado.push("fizz");
    }
     else {
      resultado.push('bug!');
    }
  }
  return(resultado);
}
fizzBuzz([2, 15, 7, 9, 45]);
// Desafio 9

function encode(decifrar) {
  let arrayDecifrar = decifrar.split([""]);
 

  console.log(arrayDecifrar);

  for (i = 0; i < arrayDecifrar.length; i += 1){
    if (arrayDecifrar.includes("a")){
        decifrado = decifrar.replace(/a/, '1');
      }
    else if (arrayDecifrar.includes("e")){
      decifrado = decifrar.replace(/e/, '2');
    }
    
    else if (arrayDecifrar.includes("i")){
      decifrado = decifrar.replace(/i/, '3');
    }
    
    else if (arrayDecifrar.includes("o")){
      decifrado = decifrar.replace(/o/, '4');
    }
    
    else if (arrayDecifrar.includes("u")){
      decifrado = decifrar.replace(/u/, '5');
    }
    else{
      return("bug")
    }
  }
  console.log(decifrado)
}
encode("Go,trybe");

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
