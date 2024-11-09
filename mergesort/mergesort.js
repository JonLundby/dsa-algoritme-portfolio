// BigO(n log n) - n iterationer for at splitte alle arrayets elementer til enkelte elementer og log n for at samle dem igen i halve dele

let iterations = 0;

export function mergeSort(arr) {
    iterations++;

    // "basecase" if statement - hvis arr kun har 1 element så må det være sorteret og kan returneres
    if (arr.length <= 1) {
        console.log("iterations: ", iterations);
        return arr; // returnere til leftArr og rightArr - men hvis det oprindeligt modtagne arr kun indeholder 1 element så returneres det og rekursion begynder ikke
    }

    // midten af arrayet findes og bliver rekursivt delt op i to nye arrays indtil der kun er 1 enkelt element i hvert array
    // ... når arrayet er splittet op indtil det kun indeholder 1 enkelt element bliver det "fanget" i ovenstående if statement...
    // ... og returneres til hhv. leftArr og rightArr
    const middle = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, middle));
    const rightArr = mergeSort(arr.slice(middle));

    // console.group()
    // console.log("left half: ", leftArr);
    // console.log("right half: ", rightArr);

    // Nå callstacken er afviklet så returneres det sorterede array
    return merge(leftArr, rightArr);

    // merge functionen modtager to array der forventes at være sorteret allerede
    // - De første to arrays modtages fra den rekursive callstack og har kun et element hver og må derfor være sorteret...
    // Resultat arrayet, som er et sorteret array af A & B, returneres og modtages så igen ved et rekursivt kald
    function merge(arrayA, arrayB) {
        let arrResult = [];
        // console.log("merge recieved arrA", arrayA);
        // console.log("merge recieved arrB", arrayB);
        // console.groupEnd();

        // første element i array A & B sammenlignes og den mindste værdi sættes ind i resultat array
        while (arrayA.length > 0 && arrayB.length > 0) {
            iterations++;
            if (arrayA[0] < arrayB[0]) {
                arrResult.push(arrayA.shift());
            } else {
                arrResult.push(arrayB.shift());
            }
        }

        // hvis der er flere elementer tilbage i kun et a de to arrays
        while (arrayA.length > 0) {
            arrResult.push(arrayA.shift());
            iterations++;
        }

        while (arrayB.length > 0) {
            arrResult.push(arrayB.shift());
            iterations++;
        }

        console.log("merge result: ", arrResult);

        // resultatet returneres til mergeSorts return statement
        return arrResult;
    }
}
