
function mergeSort (list) {

    if (list.length > 1){

        let middle = Math.floor(list.length / 2)
        let left = mergeSort(list.slice(0,middle))
        let rigth = mergeSort(list.slice(middle, list.length))


        function merge(left, rigth) {
            let arr = []
            // sai do loop se algum dos arrays estiver vazio
            while( left.length && rigth.length ) {
            // pega o menor e adiciona na frente
               if(left[0]<rigth[0]){
                arr.push(left.shift())
               } else {
                arr.push(rigth.shift())
               }
            }
            // concatena os elementos quer restam
            return [...arr, ...rigth, ...left]
        }


        list = merge(left, rigth)

    }

    return list // condicao de parada por ser um algortimo recursivo
}




console.log(mergeSort(listNaoOrdenada))