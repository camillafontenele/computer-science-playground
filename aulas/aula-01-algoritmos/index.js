// Busca linear

const nomes = ["Ana", "Bruno", "Camilla", "Diego"];

function buscarNome(lista, nomeProcurado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nomeProcurado) {
      return i;
    }
  }

  return -1;
}

console.log(buscarNome(nomes, "Camilla"));
console.log(buscarNome(nomes, "Pedro"));

// Busca binária

const numeros = [2, 4, 6, 8, 10, 12, 14, 16];

function buscarNumero(lista, numeroProcurado) {
  let inicio = 0;
  let fim = lista.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    const chute = lista[meio];

    if (chute === numeroProcurado) {
      return meio;
    }

    if (chute < numeroProcurado) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1;
}

console.log(buscarNumero(numeros, 10)); // esperado: 4
console.log(buscarNumero(numeros, 7)); // esperado: -1
