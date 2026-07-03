function algoritmoConstante(lista) {
  let operacoes = 0;
  operacoes++;
  return operacoes;
}

function algoritmoLinear(lista) {
  let operacoes = 0;
  for (let i = 0; i < lista.length; i++) {
    operacoes++;
  }
  return operacoes;
}

function algoritmoQuadratico(lista) {
  let operacoes = 0;
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      operacoes++;
    }
  }
  return operacoes;
}

const listaPequena = [1, 2, 3, 4, 5];
const listaMedia = Array.from({ length: 100 }, (_, i) => i + 1);
const listaGrande = Array.from({ length: 1000 }, (_, i) => i + 1);

console.log("Lista pequena:");
console.log("O(1):", algoritmoConstante(listaPequena));
console.log("O(n):", algoritmoLinear(listaPequena));
console.log("O(n²):", algoritmoQuadratico(listaPequena));

console.log("Lista média:");
console.log("O(1):", algoritmoConstante(listaMedia));
console.log("O(n):", algoritmoLinear(listaMedia));
console.log("O(n²):", algoritmoQuadratico(listaMedia));

console.log("Lista grande:");
console.log("O(1):", algoritmoConstante(listaGrande));
console.log("O(n):", algoritmoLinear(listaGrande));
console.log("O(n²):", algoritmoQuadratico(listaGrande));
