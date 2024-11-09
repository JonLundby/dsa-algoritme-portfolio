# BubbleSort

Bubblesort er en sorterings algoritme der sortere en liste af elementer ved trinvis at sammenligne et element med det næste element og bytter dem hvis det første element er større end det næste. Denne operation udføres fra listens første element og videre igennem hele listen.

[BubbleSort Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)

### pseudokode:

    function bubbleSort(array) {
        let swap = false - en bool til at holde styr på om der er har været byttet elementer gennem en iteration

        for hvert element "i" i array {
            reset swap til false

            for hvert element j i array {
                hvis array[i] er større end array[j]
                    så byt array[i] med array[j]

                swap sættes til true så vi ved at der har været elementer byttet
            }

            hvis swap er false så har sidste iteration ikke byttet elementer og listen må være sorteret
            !swap
                break
        }
    }

### Tidskompleksitet:

Bubblesort har en tidskompleksitet på O(n^2) - Dette er fordi bubblesort går hele listen igennem for hvert element i listen, altså n\*n gange. Tidskompleksiteten forøges altså kvadratisk jo større n er.

### Links:

https://en.wikipedia.org/wiki/Bubble_sort

https://www.w3schools.com/dsa/dsa_algo_bubblesort.php

https://www.youtube.com/watch?v=xli_FI7CuzA