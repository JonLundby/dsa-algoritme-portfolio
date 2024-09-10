import SinglyLinkedList from "./singlylinkedlist.js";


const singlylinkedlist = new SinglyLinkedList()

singlylinkedlist.add("n1");
singlylinkedlist.add("n2");
singlylinkedlist.add("n3");
singlylinkedlist.add("n4");
singlylinkedlist.add("n5");

console.log(singlylinkedlist.get(0));

// console.log(singlylinkedlist);
console.log("-------printer liste--------")
singlylinkedlist.printList();