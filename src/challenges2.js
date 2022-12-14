// Desafio 11
function generatePhoneNumber(numeroTel) {
  if (numeroTel.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let pos = 0; pos <= numeroTel.length; pos += 1) {
    if (numeroTel[pos] < 0 || numeroTel[pos] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let pos = 0; pos < numeroTel.length; pos += 1) {
    let contador = 1;
    for (let pos1 = pos + 1; pos1 <= numeroTel.length; pos1 += 1) {
      if (numeroTel[pos] === numeroTel[pos1]) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let ddd = numeroTel.slice(0, 2);
  let tel1 = numeroTel.slice(2, 7);
  let tel2 = numeroTel.slice(7, 11);
  return `(${ddd.join('')})` + ` ${tel1.join('')}-${tel2.join('')}`;
}
// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let absLineBeC = Math.abs(lineB - lineC);
  let absLineAeC = Math.abs(lineA - lineC);
  let absLineBeA = Math.abs(lineB - lineA);
  let vero = lineA < lineB + lineC || lineB < lineA + lineC || lineC < lineB + lineA;
  let veroAbs = lineA || lineB || lineC > absLineAeC || absLineBeA || absLineBeC;
  let mentira = lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineB + lineA;
  let mentiraAbs = mentira < absLineAeC && absLineBeA && absLineBeC;
  let triangulo = true;
  if (mentira && mentiraAbs) {
    return !triangulo;
  }
  if (mentira) {
    return !triangulo;
  }
  if (vero && veroAbs) {
    return triangulo;
  }
  return triangulo;
}

// Desafio 13
function hydrate(bebidas) {
  let numeros = bebidas.match(/\d+/g).map(Number);
  let soma = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    soma += numeros[i];
  }

  if (bebidas.includes(numeros)) {
    let copos = `${soma} copo de água`;
    return copos;
  }
  let copos = `${soma} copos de água`;
  return copos;
}
hydrate('1cerveja');

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
