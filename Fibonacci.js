function fibonacci(num) {
  let a = 0, b = 1;
  if (num === a || num === b) {
    return true;
  }
  while (b < num) {
    const temp = b;
    b = a + b;
    a = temp;
    if (b === num) {
      return true;
    }
  }
  return false;
}

const num = parseInt(prompt("Digite um número:"));
if (isNaN(num)) {
  console.log("Número inválido.");
} else if (num < 0) {
  console.log("Digite um número positivo.");
} else {
  let fib = "";
  for (let i = 0; i <= num; i++) {
    fib += fibonacci(i) ? i + " (Fibonacci)\n" : i + "\n";
  }
  console.log(`Sequência de Fibonacci até o número ${num}:\n${fib}`);
}
