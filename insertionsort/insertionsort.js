export function insertionSortShift(arr) {
    let iterations = 0;

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1; // holder styr på index før current

        // "j >=0" sørger for at j-- ikke ender uden for minimum indeksering af array
        // && så længe det der kom før current er større så bliver current sat til..
        // ...det samme som kom før
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // efter j-- bliver current indsat på index pladsen før currents index plads
        arr[j + 1] = current;

        iterations++;
    }

    console.log(`InsertionShift, number of iterations: ${iterations}`);
    return arr;
}

export function insertionSortSwap(arr) {
    let iterations = 0;

    // starter med at kigge på 2. element i array
    for (let i = 1; i < arr.length; i++) {
        let j = i;

        // så længe "i" element i array er mindre end elementet før...
        // så byttes de to. Og da j bliver en mindre j-- så forsætter denne procedure en enkelt index plads tilbage i arrayet
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(j, j - 1);
            j--;
        }

        iterations++;
    }

    console.log(`InsertionSwap, number of iterations: ${iterations}`);
    return arr;

    function swap(indexA, indexB) {
        const temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    }
}
