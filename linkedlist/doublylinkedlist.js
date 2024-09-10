export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.data = null;
        this.size = 0;
        this.tail = null;
    }

    // addLast( data ) - tilføjer et element til slutningen af listen
    addLast() {
        console.log("add element to end of list...");
    }

    // addFirst( data ) - tilføjer et element til begyndelsen af listen
    // get( index ) - returnerer elementet på plads nummer *index*
    // indexOf( data ) - finder plads nummer for det angivne element (payload)
    // insertAfter( index, data ) - indsætter et nyt element efter plads nummer *index*
    // insertBefore( index, data ) - indsætter et nyt element før plads nummer *index*
    // first() - returnerer det første element i listen
    // last() - returnerer det sidste element i listen
    // remove( data ) - fjerner elementet fra listen (hvis det altså var der)
    // removeIndex( index ) - fjerner elementet på det pågældende *index*
    // removeFirst() - fjerner det første element i listen - og returnerer elementet
    // removeLast() - fjerner det sidste element i listen - og returnerer elementet

    // addNodeLast( newNode ) - tilføjer en ny node til slutningen af listen
    // addNodeFirst( newNode ) - tilføjer en ny node i starten af listen
    // insertAfterNode( newNode, existingNode ) - indsætter en ny node efter en eksisterende
    // insertBeforeNode( newNode, existingNode ) - indsætter en ny node før en eksisterende
    // removeNode( existingNode ) - fjerner en eksisterende node fra listen
    // nodeAt( index ) - returnerer noden på plads nummer *index*
    // swapNodes( nodeA, nodeB ) - bytter om på to nodes pladser i listen

    // clear() - fjerner alle elementer fra listen
    // size() - returnerer antallet af nodes i listen

    // dumpList( ) - udskriver hele listen i console,
}
