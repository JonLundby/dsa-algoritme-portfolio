export function bubbleSort(arr) {
    let iterations = 0;
    let swapping = false;

    for (let i = arr.length; i > 0; i--) {
        swapping = false;

        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapping = true;
            }
            iterations++;
        }

        // stop sidste overflødige iterationer hvis ingen elementer er blevet byttet om
        if (!swapping) {
            break
        }
        iterations++;
    }

    console.log("iterations: ", iterations);

    return arr;
}
