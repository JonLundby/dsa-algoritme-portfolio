export function mergeSort() {
    

    function merge(arrayA, arrayB) {
        let arrResult = [];

        while (arrayA.length > 0 && arrayB.length > 0) {
            if (arrayA[0] < arrayB[0]) {
                arrResult.push(arrayA.shift());
            } else {
                arrResult.push(arrayB.shift());
            }
        }

        while (arrayA.length > 0) {
            arrResult.push(arrayA.shift());
        }

        while (arrayB.length > 0) {
            arrResult.push(arrayB.shift());
        }

        return arrResult;
    }
}


// export function merge(arrayA, arrayB) {
//     let arrResult = []
    
//     while (arrayA.length > 0 && arrayB.length > 0) {
        
//         if (arrayA[0] < arrayB[0]) {
//             arrResult.push(arrayA.shift())
//         } else {
//             arrResult.push(arrayB.shift())
//         }
//     }
    
//     while (arrayA.length > 0) {
//         arrResult.push(arrayA.shift())
//     }

//     while (arrayB.length > 0) {
//         arrResult.push(arrayB.shift())
//     }

//     return arrResult
// }
