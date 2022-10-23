'use strict';

/*
    1. Készíts egy olyan osztályt, mely egy tömböt tárolására alkalmas, és
        - Képes kiszamolni az elemek összegét, átlagát, minimumát, maximumát (ezek egy-egy külön függvény legyenek)
        - Egy másik ugyanilyen példány tömbjének elemeiből képes átvenni azokat az elemeket, amelyek még nem szerepelnek saját
        magában
*/

class Tombok {

    constructor(tomb, atvettTomb) {

        this.tomb = tomb;
        this.atvettTomb = atvettTomb;
    }

    osszeg() {

        return this.tomb.reduce((t, n) => t + n);
    }

    atlag() { return this.osszeg() / this.tomb.length; }

    mini() {
        let min = this.tomb[0];

        for (let i = 1; i < this.tomb.length; i++) // függvény nélküli módszerrel
            min > this.tomb[i] ? min = this.tomb[i] : min;

        return min;
        //return Math.min(...this.tomb);  // elöre definiált függvénnyel
    }

    maxi() {
        let max = this.tomb[0];

        for (let i = 1; i < this.tomb.length; i++)
            max < this.tomb[i] ? max = this.tomb[i] : max;

        return max;
        //return Math.max(...this.tomb);  // lehetne így is
    }

    noveltTomb() {

        // Próbálkoztam "fapados" módszerrel:
        /*
        let ujTomb = this.tomb;
        let vanElem = false;
        
        for (let i in this.atvettTomb) {  
            for (let j in this.tomb) {            
                if (this.atvettTomb[i] === this.tomb[j]) {
                    vanElem = true;
                }
            }
         if (!vanElem) {
            ujTomb.push(this.atvettTomb[i]);
         }
        }
        return ujTomb; */

        //Kicsit másképp talán jobb:
        let halmaz = new Set(this.tomb.concat(this.atvettTomb));
        return Array.from(halmaz);
    }

    eredetiTomb() { return this.tomb; }
}
