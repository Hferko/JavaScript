'use strict';

/*
    2. Készítsük el az online pincér OOP változatát.
        - Az osztály (nem a példány) rendelkezzen egy itallappal (ami egy objekt adattipus es a kulcsok az rendelheto italok nevei)
         - A koncepció az, hogy annyi példányt tudjunk ebből az objektumból létrehozni, ahány
        asztal van a vendéglátóegységben.
        - minden asztalnál (azaz minden példányban külön lehet így rendelni)
        - Az osztály rendelkezzen egy rendel metódussal
            - rendeléskor a példányban mentsük el a rendelt tételeket
              így vissza tudjuk kérni a rendelt tételeket
        - Az osztály rendelkezzen egy rendelesegOsszege függvénnyel, ami visszaadja az eddigi rendelések összértékét
        - Az osztály rendelkezzen egy számla  metódussal, ami a képernyőn megmutatja
          egymás alatt a termékeket (egy táblázat valójában, ami 3 oszloppal rendelkezik, [termék neve, mennyisége, ára])

*/


class Italok {

    static szamlalo = 0;

    constructor(name) {

        this.name = name;
        this.szamlalo = ++Italok.szamlalo;

        this.itallap = {
            cola: {
                name: "Coca Cola",
                text: "Máris hozom a kólát!",
                ar: 350,
                mennyiseg: "2,5 dl"
            },
            limonade: {
                name: "Limonádé",
                text: "Nagyon finom limonádét készítünk!",
                ar: 300,
                mennyiseg: "3 dl"
            },
            kave: {
                name: "Kávé",
                text: "Tejjel vagy tejszinnel parancsolja?",
                ar: 340,
                mennyiseg: "0,6 dl"
            },
            viz: {
                name: "víz",
                text: "Hozom a vizet!",
                ar: 110,
                mennyiseg: "5 dl"
            }
        }

        this.rendel();  // Szeretném, ha lefutna ez a két függvény minden példányosításkor
        this.rendelesekOsszege("Eddigi rendelések száma: " + this.szamlalo);

    }
    // -------------- eddig a constructor ----

    rendelesekSzama() {
        console.log(this.szamlalo);
    }

    rendel() {
        let osszRendeles = [];
        let rendelt = this.itallap.find(obj => obj.name === this.name);

        osszRendeles.push(rendelt)

        return osszRendeles;
    }

    rendelesekOsszege() {
        let osszertek = 0;
        let rendelt = this.itallap.find(obj => obj.name === this.name);

        osszertek += rendelt.ar;

        return osszertek;
    }

    szamla() {
        let rendelesek = this.rendel();

        let text = "";

        for (let rendel in rendelesek) {

            text += '<div class="row">';
            text += `<div class="cell"> ${rendel.name}</div>`;
            text += `<div class="cell"> ${rendel.mennyiseg}</div>`;
            text += `<div class="cell"> ${rendel.ar}</div>`;
            text += '</div>';
        }
        
        return text;
    }

}
