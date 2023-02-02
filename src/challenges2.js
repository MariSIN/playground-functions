// Desafio 11

function generatePhoneNumber(telephone) {
  if (telephone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < telephone.length - 1; i++) {
      let contador = 0;
      for (let j = 0; j < telephone.length; j++) {
        if (telephone[j] == i) {
          contador += 1;
        }

        if (contador >= 3 || telephone[i] < 0 || telephone[i] > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return `(${[telephone[0]]}${telephone[1]}) ${telephone[2]}${telephone[3]}${
    telephone[4]
  }${telephone[5]}${telephone[6]}-${telephone[7]}${telephone[8]}${
    telephone[9]
  }${telephone[10]}`;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1]));

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else if (
    lineA > Math.abs(lineB - lineC) &&
    lineB > Math.abs(lineA - lineC) &&
    lineC > Math.abs(lineB - lineA)
  ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13

function hydrate(bebida) {
  let count = 0;
  for (let i = 0; i < bebida.length; i += 1) {
    if (!isNaN (parseInt(bebida[i]))) {
      count += parseInt(bebida[i])
    }
  } if (count === 1) {
    return '1 copo de água'
  } else if (count > 1) {
      return `${count} copos de água`
    }
  } 
  console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
