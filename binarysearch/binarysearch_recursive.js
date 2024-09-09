function binarySearchRecursive(search, values, min, max, comparator, count = 0) {
    console.log("--------------------------------")
    console.log("search for: " + search)
    console.log("in values: " + values)
    console.log("minIndex: " + min)
    console.log("maxIndex: " + max)

    if (min <= max) {
        count++;
        console.log("count: " + count)
        const middle = Math.floor((max + min) / 2);
        console.log("middle(guess): " + middle +"(index)")

        const c = comparator(search, values[middle])
        
        if (c === 0) {
            console.log(`found: ${values[middle]} at index ${middle}\ncount: ${count}`);
            return middle;
        } else if (c < 0) {
            console.log(`it's lower\ncount: ${count}`);
            return binarySearchRecursive(search, values, min, middle - 1, comparator, count++)
        } else if (c > 0) {
            console.log(`it's higher\ncount: ${count}`);
            return binarySearchRecursive(search, values, middle + 1, max, comparator, count++);
        }
    }
    console.log("not found...")
    return -1
}

export { binarySearchRecursive };