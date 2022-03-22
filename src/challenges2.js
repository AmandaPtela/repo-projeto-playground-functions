// Desafio 11
function generatePhoneNumber(numeroTel) {
  for (i = 0; i <= numeroTel.length; i += 1) {
    let telefone = numeroTel.slice(2, 7);
    let telefone2 = numeroTel.slice(7,11);
    let ddd = numeroTel.slice(0, 2);
    let numero = '(' + ddd.join('') + ')' + ' ' + telefone.join('') + '-' + telefone2.join('');

    if (numeroTel.length !== 11) {
      return ('Array com tamanho incorreto.');
    } 
    
    else if (numero[i] < '0' || numero[i] > '9' || numero[0] === '0' ) {
      return('não é possível gerar um número de telefone com esses valores');
    }
    else if (numero[i] > '0' && numero[i] < '9' && numero[0] !== '0');{
      return (numero);
    }
  }
}
generatePhoneNumber(['1','2','3','4','5','6','7','8','9','0','1']);

// Desafio 12


function triangleCheck(lineA, lineB, lineC) {
  let absLineBeC = Math.abs(lineB - lineC);
  let absLineAeC = Math.abs(lineA - lineC);
  let absLineBeA = Math.abs(lineB - lineA);

  let vero =
    lineA < lineB + lineC || lineB < lineA + lineC || lineC < lineB + lineA;
  let veroAbs =
    lineA || lineB || lineC > absLineAeC || absLineBeA || absLineBeC;

  let mentira =
    lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineB + lineA;
  let mentiraAbs = mentira < absLineAeC && absLineBeA && absLineBeC;
  let triangulo = true;

  if (mentira && mentiraAbs) {
    return !triangulo;
  } else if (mentira) {
    return !triangulo;
  } else if (vero && veroAbs) {
    return triangulo;
  } else {
    return triangulo;
  }
}
triangleCheck(10, 14, 8);

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
