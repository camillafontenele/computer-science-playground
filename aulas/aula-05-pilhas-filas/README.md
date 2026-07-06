# Aula 05 — Pilhas e Filas

## Objetivo

Entender o funcionamento de pilhas e filas, duas estruturas de dados que controlam a ordem de entrada e saída dos elementos.

## O que aprendi

Pilha e fila são estruturas que organizam dados de formas diferentes.

A pilha segue a regra LIFO.

A fila segue a regra FIFO.

## Pilha

Pilha significa:

```text
LIFO — Last In, First Out
Último a entrar, primeiro a sair
```

Exemplo:

```text
Página 1
Página 2
Página 3
```

Na hora de remover:

```text
Página 3
Página 2
Página 1
```

Isso acontece porque o último item adicionado é o primeiro removido.

## Fila

Fila significa:

```text
FIFO — First In, First Out
Primeiro a entrar, primeiro a sair
```

Exemplo:

```text
Cliente 1
Cliente 2
Cliente 3
```

Na hora de atender:

```text
Cliente 1
Cliente 2
Cliente 3
```

Isso acontece porque o primeiro item adicionado é o primeiro removido.

## Diferença entre pilha e fila

| Estrutura | Regra | Exemplo                |
| --------- | ----- | ---------------------- |
| Pilha     | LIFO  | Histórico do navegador |
| Fila      | FIFO  | Fila de mercado        |

## Operações usadas

Na pilha:

```javascript
push(); // adiciona no final
pop(); // remove do final
```

Na fila:

```javascript
push(); // adiciona no final
shift(); // remove do começo
```

## Código principal

```javascript
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
```

## Resultado

```text
Histórico:
[ 'Google', 'YouTube', 'GitHub' ]

Voltando:
GitHub
YouTube
Google

Atendimento:
[ 'Cliente 1', 'Cliente 2', 'Cliente 3' ]

Atendendo:
Cliente 1
Cliente 2
Cliente 3
```

## Conclusão

A pilha remove primeiro o último item adicionado.

A fila remove primeiro o primeiro item adicionado.

Essas estruturas são importantes porque aparecem em várias situações reais, como histórico de navegação, desfazer ações, filas de atendimento e processamento de tarefas.
