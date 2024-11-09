// import { merge } from "./mergesort.js";
import { mergeSort } from "./mergesort.js";

const listA = [];
const listB = [80];
const listC = [3, 5, 1, 2, 9];
const listD = [10, 99, 25, 4, 15, 6, 19, 80];

const listMergeSorted = mergeSort(listD)
console.log(listMergeSorted);


// test af merge funktion
// const listA = [1, 3, 7, 8];
// const listB = [0, 2, 4, 5, 6, 9];

// const mergedArr = merge(listA, listB);

// console.log(mergedArr);
