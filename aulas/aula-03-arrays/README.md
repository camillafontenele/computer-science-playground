# Aula 03 — Arrays, índices e operações

## Objetivo

Entender o que é um array, como funcionam os índices e qual é o custo de algumas operações comuns.

## O que aprendi

Um array é uma lista ordenada de valores.

Cada valor possui uma posição chamada índice.

Em JavaScript, os índices começam em zero.

```javascript
const produtos = ["Mouse", "Teclado", "Monitor", "Notebook"];

produtos[0]; // Mouse
produtos[1]; // Teclado
produtos[2]; // Monitor
```

## Conceitos principais

- Índice é a posição de um item no array.
- Acessar um item por índice é O(1).
- Buscar um valor pode ser O(n).
- Adicionar ou remover no final costuma ser O(1).
- Adicionar ou remover no começo pode ser O(n).

## Custo das operações

| Operação           | Complexidade    |
| ------------------ | --------------- |
| Acessar por índice | O(1)            |
| Buscar por valor   | O(n)            |
| push               | geralmente O(1) |
| pop                | geralmente O(1) |
| unshift            | O(n)            |
| shift              | O(n)            |

## Exercício feito

Criei uma função `buscarProduto` que procura um produto dentro de uma lista.

```javascript
function buscarProduto(lista, produtoProcurado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === produtoProcurado) {
      return i;
    }
  }

  return -1;
}
```

Resultado:

```text
buscarProduto(produtos, "Monitor") → 2
buscarProduto(produtos, "Cadeira") → -1
```

## Conclusão

Arrays são bons para acessar itens por posição.

Mas procurar valores ou mexer no começo da lista pode ficar mais caro conforme o array cresce.
