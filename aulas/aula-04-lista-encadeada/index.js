class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class ListaEncadeada {
  constructor() {
    this.inicio = null;
  }

  adicionarNoComeco(valor) {
    const novoNode = new Node(valor);

    novoNode.proximo = this.inicio;

    this.inicio = novoNode;
  }

  mostrar() {
    let atual = this.inicio;

    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.proximo;
    }
  }
}

const lista = new ListaEncadeada();

lista.adicionarNoComeco(30);
lista.adicionarNoComeco(20);
lista.adicionarNoComeco(10);

lista.mostrar();

console.log(lista.buscar(20));
console.log(lista.buscar(99));
