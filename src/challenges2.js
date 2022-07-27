// Desafio 11
function generatePhoneNumber(telephone) {
  if (telephone.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let i = 0; i < telephone.length - 1; i++) {
      let contador = 0;
      for (let j = 0; j < telephone.length; j++) {
        if (telephone[j] == i) {
          contador += 1;
        }
        
        if (contador >= 3 || telephone[i] < 0 || telephone[i] > 9) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }  
  }  
  return `(${[telephone[0]]}${telephone[1]}) ${telephone[2]}${telephone[3]}${telephone[4]}${telephone[5]}${telephone[6]}-${telephone[7]}${telephone[8]}${telephone[9]}${telephone[10]}`;
}



console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
