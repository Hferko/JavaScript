'use strict';

/*
    5. Készítsetek egy lottosorsolás szimulátor osztályt
        Az osztály modelezze le a lottosorsolás működését.
        A constructor paraméterként kapja meg, a golyók számát, és, hogy hány darabot sorsoljunk,

        A sorsolás a következő képpen működjön:
            - Legyen egy kosarunk, amiben benne van az összes golyó. (tehát egy annyi elemű tömb, ahány golyónk van)
            - A tömb elemei a golyó számait tartalmazák.
            - LEgyen egy kever metódus, ami összekeveri a golyókat (vagyis a tömb elemeit)
            - Legyen egy huz metódus, ami kivesz random egy golyót a kosárból (fizikálisan is)
              és eltároljuk a példányban, a kivett golyót.
              - Szabály, hogy max csak annyit húzhatunk, ahányat megadtunk a konstruktorban, többet nem!

            - LEgyen egy ujHuzas metosus, ami előszőr kever, aztán kihúzza az elemet a kosárból
                (ennek megvalósításához használjátok a kever és húz metódusokat.)

            - Legyen egy húzások metódus, ami visszatér egy tömbbel benne a golyókkalt, amikel kihúztunk.

*/

function letrehoz(index) {
    let ix = index.toString();

    let whiteSpace = document.createElement('span');
    let label = document.createElement('label')
    label.htmlFor = ix;
    label.appendChild(document.createTextNode(ix));

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = ix;
    checkbox.name = ix;
    checkbox.value = ix;

    let container = document.getElementById('kontener');
    container.appendChild(whiteSpace);
    container.appendChild(label);
    container.appendChild(checkbox);
}
// itt hívom meg a checkbox-gyárat
for (let i = 1; i < 91; i++) {
    letrehoz(i)
}

let lotto = 0;

document.querySelector("#valaszt").addEventListener("change", function () {

    lotto = parseInt(document.querySelector("#valaszt").value);
    document.querySelector("#sorsol").disabled = false;    
});

// Válasszon a checkbox-ok közül az ápolt
function sorsolas() {
    
    document.querySelector("#text").innerHTML = "Ma gépi sorsolás lesz. Kezdünk...";

    let tippek = [];
    let sorsoltak = [];
    let nyero = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    document.getElementById("eredmeny").innerHTML = "";

    for (let i = 0; i < checkboxes.length; i++) {
        if (tippek.length < lotto) {
            tippek.push(checkboxes[i].value);
        }
    }
    if (tippek.length < lotto) {
        document.getElementById("tipped").innerHTML = `<b style="color:red;">${lotto} számot kéretik kiválasztani!</b>`;
    }
    else {
        tippek.sort(function (a, b) { return a - b });
        console.log(tippek);
        document.getElementById("tipped").innerHTML = "Az ön által választott számok emelkedő sorrendben: <b>" + tippek + "</b>";
    }

    // Itt a gép sorsol - fontos, hogy a RANDOM esetén ne kerüljön be két azonos szám...
    // ...ezért Halmazba olvastatom be a számokat
    const gepi = new Set();

    while (gepi.size < lotto) {
        gepi.add(Math.floor(Math.random() * 90) + 1);
    }
    document.getElementById("szoveg").innerHTML = "A gép által sorsolt e heti nyerőszámok emelkedő sorrendben:";

    // Könnyebb az életem, ha a halmazt array típusra váltom, hogy könnyen összehasonlítsam a játékos számaival
    gepi.forEach(function (value) {
        sorsoltak.push(value);
    })

    sorsoltak.sort(function (a, b) { return a - b });
    console.log(sorsoltak);
    document.getElementById("sorsolt").innerHTML = "<b>" + sorsoltak + "</b>";

    // Végiglépkedek mindkét tömbön
    for (let i = 0; i < sorsoltak.length; i++) {
        for (let j = 0; j < tippek.length; j++) {
            if (sorsoltak[i] == parseInt(tippek[j])) {
                nyero.push(sorsoltak[i]);
            }
        }
    }

    if (nyero.length < 1) {
        document.getElementById("nyert").innerHTML = "Sajnos önnek nem volt találata ezen a héten.";
    }
    else {
        console.log(nyero);
        document.getElementById("eredmeny").innerHTML = "Gratulálok, önnek <b>" + nyero.length + "</b> találata van.";
        document.getElementById("nyert").innerHTML = "Az ön találatai: <b>" + nyero + "</b>";
    }
}

document.querySelector("#sorsol").addEventListener("click", sorsolas);