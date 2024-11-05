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
