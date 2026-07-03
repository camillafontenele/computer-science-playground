function adivinharNumero(numeroSecreto) {
  let inicio = 1;
  let fim = 1000;
  let tentativas = 0;

  while (inicio <= fim) {
    tentativas++;
    const chute = Math.floor((inicio + fim) / 2);

    console.log(
      `Tentativa ${tentativas}: Inicio ${inicio}, Fim ${fim}, Chute = ${chute}`,
    );

    if (chute === numeroSecreto) {
      console.log(`Acertei! O número secreto é ${numeroSecreto}.`);
      console.log(`Total de tentativas: ${tentativas}`);
      return tentativas;
    }

    if (chute < numeroSecreto) {
      inicio = chute + 1;
    } else {
      fim = chute - 1;
    }
  }
}

adivinharNumero(873);
