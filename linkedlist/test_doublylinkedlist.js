import doublylinkedlist from "./doublylinkedlist.js";

const lst = new doublylinkedlist();

// tilføj noder til sidst i listen
lst.addLast("n1");
lst.addLast("n2");
lst.addLast("n3");

// tilføj noder til starten af listen
lst.addFirst("n0");

// console.log(lst.get(2));
// console.log(lst.indexOf("n3"))

// lst.insertAfter(0, "n1.5");

// lst.insertBefore(0, "n0.5");

// lst.insertAfter(2, "n4");

lst.insertBefore(2, "n2.5");

// console.log(lst.first());

// lst.remove("n3");
// lst.remove("n1");
// lst.remove("n2.5");

console.log("--------------");
lst.printList();
// console.log(lst);
