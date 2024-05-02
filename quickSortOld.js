let listanaoordenada = [2, 743, 232, 61, 0, 8, 9, 56564, 23, 5, 8];

function quicksort(lista, inicio = 0, fim = lista.length - 1) {
  let i = inicio;
  let j = fim;
  let pivo = lista[inicio];

  while (i <= j) {
    while (lista[i] < pivo) {
      i++;
    }

    while (lista[j] > pivo) {
      j--;
    }

    if (i <= j) {
      let temp = lista[i];
      lista[i] = lista[j];
      lista[j] = temp;

      i++;
      j--;
    }
  }

  if (inicio < j) {
    quicksort(lista, inicio, j);
  }

  if (i < fim) {
    quicksort(lista, i, fim);
  }

  return lista;
}
