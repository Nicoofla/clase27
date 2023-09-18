function calcular(operador, num1, num2) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      resultado = 'Operador inválido';
  }

  return resultado;
}

const operador = '+';
const num1 = 5;
const num2 = 3;

const resultado = calcular(operador, num1, num2);
console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);

