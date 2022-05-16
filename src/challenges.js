// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === false) {
    return false;
  }
  if (a === true && b === true) {
    return true;
  }
  return false;
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
  const splited = frase.split(' ');
  return splited;
}

// Desafio 4
function concatName(palavras) {
  const palavras1Slice = palavras.slice(-1);
  const palavras2Slice = palavras.slice(0, 1);
  const resultado = `${palavras1Slice}, ${palavras2Slice}`;
  if (palavras) {
    return resultado;
  }
}
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

  for (let i = 0; i <= numeros.length; i += 1) {
    if (numeros[i] === maior) {
      vezes += 1;
    }
  }
  return vezes;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disGato1 = cat1 - mouse;
  let disGato2 = cat2 - mouse;

  if (disGato1 < 0) {
    disGato1 *= -1;
  }

  if (disGato2 < 0) {
    disGato2 *= -1;
  }

  if (disGato2 < disGato1) {
    return 'cat2';
  }
  if (disGato1 < disGato2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeross) {
  let resultado = [];

  numeross.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (element % 5 === 0) {
      resultado.push('buzz');
    } else if (element % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  });
  return (resultado);
}

// Desafio 9
function encode(frase) {
  let frasePicote = frase.split(['']);

  for (let i = 0; i < frasePicote.length; i += 1) {
    let troca = frase
      .replace(/a/g, '1')
      .replace(/e/g, '2')
      .replace(/i/g, '3')
      .replace(/o/g, '4')
      .replace(/u/, '5');
    return troca;
  }
}
encode('hello');

function decode(frase) {
  let frasePicote = frase.split(['']);

  for (let i = 0; i < frasePicote.length; i += 1) {
    let troca = frase
      .replace(/1/g, 'a')
      .replace(/2/g, 'e')
      .replace(/3/g, 'i')
      .replace(/4/g, 'o')
      .replace(/5/, 'u');
    return troca;
  }
}

// Desafio 10
function techList(tecnologias, nome) {
  const array = [];
  const techsOrdenadas = tecnologias.sort();
  if (tecnologias.length === 0) {
    return ('Vazio!');
  }

  for (let i = 0; i < tecnologias.length; i += 1) {
    const lista = {
      tech: techsOrdenadas[i],
      name: nome,
    };
    array.push(lista);
  }
  return array;
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
