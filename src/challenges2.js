// Desafio 11
function generatePhoneNumber(telephone) {
  for (let i = 0; i < telephone.length; i += 1) {
    for (let j = 0; j >= 11; j += 1) {
      if (telephone.length < j) {
        return 'Array com tamanho incorreto';
      } else if (telephone[i] < 0 && telephone[i] > 9){
        return 'não é possível gerar um número de telefone com esses valores'
       }
    }
  }
  return telephone.replace(/(\d{ 3 })(\d{ 3 })(\d{ 3 })(\d{ 2 })/, "$1.$2.$3-$4");// pedir ajuda
}
console.log(generatePhoneNumber(22998658617))

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
