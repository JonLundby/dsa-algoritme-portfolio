class Node {
    constructor(data, next = null) {
        // next = null, hvis der ikke er nogen næste node
        // modtager data og next (en pointer der peger på næste node)
        this.data = data; // en property der holder på et object, fx enemy object
        this.next = next; // en reference til næste node i en linkedList
    }
}

export default class singlylinkedlist {
    // Constructor
    constructor() {
        this.head = null; // Den første node
        this.size = 0;
    }

    // add( data ) - der opretter en ny node, med link til data-objektet, og tilføjer den til listen
    add(data) {
        //add modtager data objekt
        this.head = new Node(data, this.head); // listens head er en ny node og peger på head som første gang er null og herefter peger den på den foregående node
        this.size = this.size + 1;
    }

    // remove( data ) - der finder en node med link til dét data-objekt, og fjerner noden.
    remove(data) {
        // hvis head er null så er listen tom
        if (this.head === null) {
            return null; // hvis listen er tom returnes null
        }

        // hvis listens første head er det samme som data
        if (this.head.data === data) {
            this.head = this.head.next; // så skal listens head sættes til den næste node således går den første head tabt(bliver removed)
            return data;
        }

        let current = this.head; // holder på den node vi kigger på (til at starte med den første node i listen)
        let previous = null; // holder på den sidste node vi kiggede på

        // så længe current (head) er noget
        while (current !== null) {
            //hvis current (head) er det samme som data
            if (current.data === data) {
                previous.next = current.next; // så sættes previous node til at pege på noden som current noden peger på (altså springes current node over fordi den skal removes)
                this.size--; // size bliver 1 mindre
                return data; // returner det fundne og fjernede object
            }
            previous = current; // den node vi har kigget på, og som ikke var den der skulle removes, bliver sat til previous
            current = current.next; // current node som vi har kigget på bliver udskiftet med den næste som den selv peger på
        }
        return null;
    }

    // getFirst() - der returnerer data i den første node i listen
    getFirst() {
        if (this.head.data !== null) {
            return this.head.data;
        } else {
            return null;
        }
    }
    // getLast() - der returnerer data i den sidste node i listen (længst væk fra head)
    getLast() {
        // hvis head er null så er listen tom og null returneres
        if (this.head === null) {
            console.log("listen er tom");
            return null;
        }

        if (this.head.next === null) {
            return this.head.data;
        }

        let current = this.head;

        // så længe current (head) peger på noget sættes current til at være det den peger på
        while (current.next !== null) {
            current = current.next;

            // hvis current lige pludselig ikke peger på noget så må det være den sidste og den returneres
            if (current.next === null) {
                return current.data;
            }
        }
    }

    // get( index ) - der returnerer data-objektet på det pågældende index i listen.
    get(index) {
        // hvis head er null så er listen tom så kan index ikke findes
        if (this.head === null) {
            console.log("listen er tom");
            return null;
        }

        // første head node gemmes i variabel
        let current = this.head;
        
        // iteration over listens længde
        for (let i = 0; i < this.size; i++) {
            
            // hvis er lig med index så returneres det data der er  current
            if (i === index) {
                return current.data
            }

            // current node bliver til næste da i ikke var lig index
            current = current.next;
        }

        return null; // når fo loopet er færdigt må index være out of bounds
    }

    // ------------------------

    // getFirstNode() - der returnerer den første node i listen
    // getNextNode( node ) - der returnerer noden efter denne (eller null, hvis der ikke er nogen)
    // getLastNode() - der returnerer den sidste node i listen
    // getNodeWith( data ) - der returnerer den node der linker til dette data-objekt
    // removeNode( node ) - der fjerner dén node fra listen
    // removeFirstNode() - der fjerner den første node fra listen
    // removeLastNode() - der fjerner den sidste node fra listen
    // insertAfter( node ) - der indsætter en ny node efter den pågældende

    // ------------------------

    // clear() - der fjerner alle nodes fra listen, og sørger for at den er tom.
    // size() - der returnerer antallet af nodes i listen

    printList() {
        let current = this.head;
        while (current !== null) {
            if (current.data === undefined) {
                console.log("No data in node");
            } else {
                console.log(current.data); // Udskriv data for hver node
            }
            current = current.next; // Gå videre til næste node
        }
    }
}
