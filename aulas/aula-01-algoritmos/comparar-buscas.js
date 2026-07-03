// Comparação entre busca linear e busca binária

function compararBuscaLinear(numeroSecreto, limite) {
  let tentativas = 0;

  for (let i = 1; i <= limite; i++) {
    tentativas++;

    if (i === numeroSecreto) {
      return tentativas;
    }
  }

  return -1;
}

function compararBuscaBinaria(numeroSecreto, limite) {
  let inicio = 1;
  let fim = limite;
  let tentativas = 0;

  while (inicio <= fim) {
    tentativas++;

    const chute = Math.floor((inicio + fim) / 2);

    if (chute === numeroSecreto) {
      return tentativas;
    }

    if (chute < numeroSecreto) {
      inicio = chute + 1;
    } else {
      fim = chute - 1;
    }
  }

  return -1;
}

const numeroSecreto = 873;
const limite = 1000;

console.log(
  "Busca linear:",
  compararBuscaLinear(numeroSecreto, limite),
  "tentativas",
);
console.log(
  "Busca binária:",
  compararBuscaBinaria(numeroSecreto, limite),
  "tentativas",
);
