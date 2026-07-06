# Aula 04 — Listas encadeadas

## Objetivo

Entender o que é uma lista encadeada e comparar seu funcionamento com arrays.

## O que aprendi

Uma lista encadeada é formada por nós.

Cada nó guarda:

- um valor
- uma referência para o próximo nó

Exemplo:

```text
10 → 20 → 30 → null
```

## Conceitos principais

- Um nó possui `valor` e `proximo`.
- A lista começa pelo primeiro nó.
- Para percorrer a lista, seguimos de nó em nó.
- Diferente do array, não acessamos diretamente por índice.
- Para encontrar um valor, percorremos a lista a partir do início.

## Comparação com arrays

| Operação | Array | Lista encadeada |
| Acessar por índice | O(1) | O(n) |
| Buscar por valor | O(n) | O(n) |
| Inserir no começo | O(n) | O(1) |

## Exercício feito

Implementei uma lista encadeada simples com os métodos:

- `adicionarNoComeco`
- `mostrar`
- `buscar`

## Código principal

```javascript
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

  buscar(valorProcurado) {
    let atual = this.inicio;

    while (atual !== null) {
      if (atual.valor === valorProcurado) {
        return true;
      }

      atual = atual.proximo;
    }

    return false;
  }
}

const lista = new ListaEncadeada();

lista.adicionarNoComeco(30);
lista.adicionarNoComeco(20);
lista.adicionarNoComeco(10);

lista.mostrar();

console.log(lista.buscar(20));
console.log(lista.buscar(99));
```

## Resultado

```text
10
20
30
true
false
```

## Respostas dos exercícios

### 1. O que é um nó em uma lista encadeada?

Um nó é uma parte da lista encadeada.

Cada nó guarda um valor e uma referência para o próximo nó.

### 2. Qual é a principal diferença entre array e lista encadeada?

O array organiza os valores por índice.

A lista encadeada organiza os valores por nós ligados entre si.

### 3. Por que acessar uma posição específica em uma lista encadeada é O(n)?

Porque não conseguimos ir direto para uma posição.

Precisamos começar pelo primeiro nó e percorrer a lista até chegar no item desejado.

### 4. Por que inserir no começo de uma lista encadeada pode ser O(1)?

Porque não precisamos deslocar todos os itens.

Só precisamos criar um novo nó, fazer ele apontar para o antigo início e atualizar o início da lista.

## Conclusão

Arrays são melhores quando precisamos acessar itens diretamente por posição.

Listas encadeadas podem ser melhores quando precisamos inserir ou remover itens no começo da estrutura.

A lista encadeada mostra bem a importância de entender como os dados são organizados na memória e como isso afeta o custo das operações.
