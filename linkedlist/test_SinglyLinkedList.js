import singlylinkedlist from "./singlylinkedlist.js";


const lst = new singlylinkedlist()

lst.add("n1");
lst.add("n2");
lst.add("n3");
lst.add("n4");
lst.add("n5");

// console.log(lst.get(0));
// console.log(lst.get(2));
// console.log(lst.get(4));

// console.log(lst.getFirst());
console.log(lst.getLast());
console.log(lst.remove("n5"))

// console.log(singlylinkedlist);
console.log("-------printer liste--------")
lst.printList();