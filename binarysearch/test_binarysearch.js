import { binarySearch, compare, stringCompareFunction, nameCompareFunction } from "./binarysearch.js";
import { binarySearchRecursive } from "./binarysearch_recursive.js";

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

const ordliste = [
    "andedam",
    "andegård",
    "bondefanget",
    "bondegård",
    "børnearbejde",
    "gadefejer",
    "gær",
    "gødning",
    "gaardejer",
    "kalapøjser",
    "kalundborg",
    "kørt",
    "kårde",
    "ålborg",
    "aarhus",
];

const persons = [
    { name: "Draco Malfoy", house: "Slytherin" },
    { name: "Harry Potter", house: "Gryffindor" },
    { name: "Hermione Granger", house: "Gryffindor" },
    { name: "Neville Longbottom", house: "Gryffindor" },
    { name: "Ron Weasley", house: "Gryffindor" },
];

// *** OUTCOMMENT SINGLE CONSOLE.LOG TO TEST ***

// *** Binary search ITERATIVE ***

// console.log(binarySearch(25, values, compare));
// console.log(binarySearch("gaardejer", ordliste, stringCompareFunction));
// console.log(binarySearch("Ron Weasley", persons, nameCompareFunction));

// *** binary search RECURSIVE ***

// console.log(binarySearchRecursive(34, values, 0, values.length, compare));
console.log(binarySearchRecursive("kalundborg", ordliste, 0, ordliste.length, stringCompareFunction));
// console.log(binarySearchRecursive("Neville Longbottom", persons, 0, persons.length, nameCompareFunction));