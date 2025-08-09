
const num1 = 10;
const num2 = 5;

let soma, subtracao, multiplicacao, divisao;

soma = num1 + num2;
subtracao = num1 - num2;
multiplicacao = num1 * num2;

if (num2 !== 0) {
  divisao = num1 / num2;
} else {
  divisao = null;
}

console.log(`Soma: ${num1} + ${num2} = ${soma}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);
if (divisao !== null) {
  console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
} else {
  console.log("Erro: Não é possível dividir por zero.");
}

let operacao = 'divisao';

switch (operacao.toLowerCase()) {
  case 'adicao':
  case 'soma':
    console.log(`Resultado da adição: ${num1 + num2}`);
    break;
  case 'subtracao':
  case 'subtração':
    console.log(`Resultado da subtração: ${num1 - num2}`);
    break;
  case 'multiplicacao':
  case 'multiplicação':
    console.log(`Resultado da multiplicação: ${num1 * num2}`);
    break;
  case 'divisao':
  case 'divisão':
    if (num2 !== 0) {
      console.log(`Resultado da divisão: ${num1 / num2}`);
    } else {
      console.log("Erro: Não é possível dividir por zero.");
    }
    break;
  default:
    console.log("Operação inválida. Escolha entre adição, subtração, multiplicação ou divisão.");
}
