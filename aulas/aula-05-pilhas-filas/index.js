// Pilha

const pilha = [];

pilha.push("Página 1");
pilha.push("Página 2");
pilha.push("Página 3");

console.log("Pilha:");
console.log(pilha);

console.log("Removendo da pilha:");
console.log(pilha.pop());
console.log(pilha.pop());
console.log(pilha.pop());

// Fila

const fila = [];

fila.push("Cliente 1");
fila.push("Cliente 2");
fila.push("Cliente 3");

console.log("Fila:");
console.log(fila);

console.log("Removendo da fila:");
console.log(fila.shift());
console.log(fila.shift());
console.log(fila.shift());

class Pilha {
  constructor() {
    this.itens = [];
  }
  adicionar(item) {
    this.itens.push(item);
  }
  remover() {
    return this.itens.pop();
  }

  mostrar() {
    console.log(this.itens);
  }
}

class Fila {
  constructor() {
    this.itens = [];
  }
  entrar(item) {
    this.itens.push(item);
  }
  sair() {
    return this.itens.shift();
  }
  mostrar() {
    console.log(this.itens);
  }
}

const historico = new Pilha();
historico.adicionar("Google");
historico.adicionar("Youtube");
historico.adicionar("Github");

console.log("Histórico:");
historico.mostrar();

console.log("Voltando:");
console.log(historico.remover());
console.log(historico.remover());
console.log(historico.remover());

const atendimento = new Fila();

atendimento.entrar("Cliente 1");
atendimento.entrar("Cliente 2");
atendimento.entrar("Cliente 3");

console.log("Atendimento:");
atendimento.mostrar();

console.log("Atendendo:");
console.log(atendimento.sair());
console.log(atendimento.sair());
console.log(atendimento.sair());
