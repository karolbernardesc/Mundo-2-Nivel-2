// Trocar a posição de um item do vetor de acordo com o índices passados
const swap = (vetor = [], leftIndex, rightIndex) => {
    let aux = vetor[leftIndex];
    vetor[leftIndex] = vetor[rightIndex];
    vetor[rightIndex] = aux;
    return vetor;
}

// Embaralhar o vetor quantas vezes for requerido
const shuffle = (vetor = [], qntdTrades) => {
    let vetorComprimento = vetor.length - 1;
    for (var i = 0; i < qntdTrades; i++) {
        let randomNumber = Math.random() * vetorComprimento;
        let randomNumber2;
        do {
            randomNumber2 = Math.random() * vetorComprimento;
        } while (randomNumber == randomNumber2);
        
        vetor = swap(vetor, randomNumber.toFixed(0), randomNumber2.toFixed(0));
    }
    return vetor;
}

// Ordenar o vetor de forma crescente utilizando o algorítmo de bubble sort
const bubble_sort = (vetor = []) => {
    let vetorComprimento = vetor.length;
    for (let i = 0; i < vetorComprimento; i++) {
        for (let j = i + 1; j < vetorComprimento; j++) {
            if (vetor[i] > vetor[j]) {
                let aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
    return vetor;
}

// Ordenar o vetor de forma crescente utilizando o algorítmo de selection sort
const selection_sort = (vetor = []) => {
    let vetorComprimento = vetor.length;
    for (let i = 0; i < vetorComprimento; i++) {
        let menor = i;
        for (let j = i + 1; j < vetorComprimento; j++) {
          if (vetor[menor] > vetor[j]) {
            menor = j;
          }
        }
        if (i !== menor) {
          // swap the elements
          [vetor[i],vetor[menor]] = [vetor[menor], vetor[i]];
        }
      }
    
      return vetor;
}

// Ordenar o vetor de forma crescente utilizando o algorítmo de quick sort
const quick_sort = (vetor = [], inicialPosition, finalPosition) => {
    var index;
    if (vetor.length > 1) {
        index = particionamento(vetor, inicialPosition, finalPosition, vetor[Math.floor((finalPosition + inicialPosition) / 2)]); //index returned from partition
        if (inicialPosition < index - 1) { //more elements on the inicialPosition of the pivot
            quick_sort(vetor, inicialPosition, index - 1);
        }
        if (index < finalPosition) { //more elements on the right side of the pivot
            quick_sort(vetor, index, finalPosition);
        }
    }
    return vetor;
}

// Auxiliar para o algorítmo de ordenação quick sort
const particionamento = (vetor = [], inicialPosition, finalPosition, pivotValue) => {
        i = inicialPosition,
        j = finalPosition;
    while (i <= j) {
        while (vetor[i] < pivotValue) {
            i++;
        }
        while (vetor[j] > pivotValue) {
            j--;
        }
        if (i <= j) {
            swap(vetor, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}