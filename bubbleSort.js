let listaNaoOrdenada = [3,6,5,8,3,4,1,23,7]

function bubbleSort (list) {

    for (let i=0; i < list.length; i++) {
        for (let j = 0 ; j < list.length -1; j++) {
            if (list[j] < list[i]) {
                let temp = list[i];
                list[i] = list[j]
                list[j] = temp;
            }
        }
    }

    return list;

}
