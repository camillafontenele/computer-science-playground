const produtos = ["Mouse", "Teclado", "Monitor", "Notebook"];

console.log("Lista inicial:");
console.log(produtos);

console.log("Primeiro produto:", produtos[0]);
console.log("Terceiro produto:", produtos[2]);

produtos.push("Webcam");
console.log("Depois do push:");
console.log(produtos);

produtos.pop();
console.log("Depois do pop:");
console.log(produtos);

produtos.unshift("Headset");
console.log("Depois do unshift:");
console.log(produtos);

produtos.shift();
console.log("Depois do shift:");
console.log(produtos);

function buscarProduto(lista, produtoProcurado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === produtoProcurado) {
      return i;
    }
  }

  return -1;
}

console.log(buscarProduto(produtos, "Monitor"));
console.log(buscarProduto(produtos, "Cadeira"));
