function calcular(operador, num1, num2) {
  let resultado;

  switch (operador) {
    case 'sumar':
      resultado = num1 + num2;
      break;
    case 'restar':
      resultado = num1 - num2;
      break;
    case 'multiplicar':
      resultado = num1 * num2;
      break;
    case 'dividir':
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

