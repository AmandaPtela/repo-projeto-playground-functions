// Desafio 11
function generatePhoneNumber(numeroTel) {

}
generatePhoneNumber(1234567890)

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absLineBeC = Math.abs(lineB-lineC);
  let absLineAeC = Math.abs(lineA-lineC);
  let absLineBeA = Math.abs(lineB-lineA)

  let vero = lineA < (lineB+lineC) || lineB < (lineA+lineC) || lineC < (lineB+lineA);
  let veroAbs = lineA || lineB ||lineC > absLineAeC || absLineBeA || absLineBeC;

  let mentira = lineA > (lineB+lineC) || lineB > (lineA+lineC) || lineC > (lineB+lineA);
  let mentiraAbs = mentira < absLineAeC && absLineBeA && absLineBeC;
  let triangulo = true;

   if (mentira && mentiraAbs){
    return(!triangulo)
  }
  else if(mentira){
    return(!triangulo)
  }

  else if (vero && veroAbs){
    return(triangulo);
  }

   else {
     return(triangulo);
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
