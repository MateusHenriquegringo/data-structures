function quickSort(list){

    if (list.length <= 1){
        return list
    }
    
    const pivo = list[Math.floor(list.length / 2)]
    const esquerda = []
    const direita = []

    for(let i=0; i < list.length; i++){
        if(i === Math.floor(list.length / 2)){
            continue
        }

        list[i] > pivo ? direita.push(list[i]) : esquerda.push(list[i])
    }

    return [...quickSort(esquerda), pivo, ...quickSort(direita)]
}

