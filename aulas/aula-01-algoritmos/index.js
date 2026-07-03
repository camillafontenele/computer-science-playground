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
