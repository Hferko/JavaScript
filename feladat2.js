/*
    1. prompt segítségével kérjetek be egy számot, majd for ciklus segítségével, generáljátok ki
       (és a html documanetumban jelenítsétek meg) a bekért szám 10-es szorzótábláját.
       pl, ha a bekért szám 8, akkor az eredmény:
        1 * 8 = 8
        2 * 8 = 16
        .
        .
        .
        10 * 8 = 80
       A feladat megoldásához használj egyszerű for ciklust.
*/

/*
    2. A bekért számnak írjuk ki az osztóit, amiben 1 és önmaga nem szerepel.
       Ha nincs ilyen, akkor írjuk ki, hogy "a [bekért számnak] nincs osztója".
       (a szögletes zárójel helyére helyettesítsük be a bekért számot)
       A megoldáshoz használj egyszerű for ciklust.
*/

/*
    3. Írjunk egy prim nevezetű függvényt, mely beneti paraméternek megkap egy számot, és kimenetként
       visszatér egy boolean típussal (true, ha primszám a bemeneti érték, false, ha nem)
*/

/*
    4. Adott az alábbi tömb 
*/
var emberek = [
    {
        firstName: "Almási",
        lastName: "Nóémi",
        position: "vezető",
        age: 32
    },
    {
        firstName: "Kovács",
        lastName: "Gábor",
        position: "dolgozó",
        age: 40
    },
    {
        firstName: "Jakab",
        lastName: "Orsolya",
        position: "dolgozó",
        age: 28
    },
    {
        firstName: "Mátyás",
        lastName: "Norbert",
        position: "vezető",
        age: 30
    },
    {
        firstName: "Herceg",
        lastName: "Ferenc",
        position: "dolgozó",
        age: 41
    },
    {
        firstName: "Ivácsony",
        lastName: "Gabriella",
        position: "vezető",
        age: 32
    },
    {
        firstName: "Dusinszki",
        lastName: "Levente",
        position: "dolgozó",
        age: 32
    },
    {
        firstName: "Gábor",
        lastName: "Irén",
        position: "dolgozó",
        age: 25
    },
    {
        firstName: "Osváth",
        lastName: "Pongrác",
        position: "dolgozó",
        age: 45
    },
    {
        firstName: "Fülöp",
        lastName: "Eszter",
        position: "vezető",
        age: 33
    }
];

/*
    4.a. Jelenítsétek meg egy listában vagy div táblázatban (kinek amelyik szimpatikusabb)
         Azon szemlyek névsorát (firstName, lastName), akik vezető beosztásban vannak.
    4.b.-(ez nem kötelező. Azoknak kaik úgy érzik, hogy meg tudják csinálni.)
         Helyezzetek el egy select-option form elemet a html dokumentumban, és egy listáz gombot.
         A Select mezőben legyen lehetőség kiválasztani a "vezető" és "dolgozó" opciókat.
         Majd a listáz gombra kattintva jelenítsük meg a kiválasztott beosztásban levők névsorát. 
*/


// - 1. feladat: -
let numero = parseInt(prompt("Tisztelt felhasználó \n\tKérek öntől egy EGÉSZ SZÁMOT:\n"));

while (!numero) numero = parseInt(prompt("⛔️ Ez nem volt szám. \n Talán egy SZÁMOT, ha lehetne...\n"));

console.log("A kapott szám: " + numero);
document.querySelector("#szam").innerHTML = `Az ön által választott szám: <span class="result">${numero} </span><br>A szorzótáblája:`;

var lista = "<ul>";
for (let i = 1; i < 11; i++) {

    lista += `<li>${i} * ${numero} = ${i * numero}</li>`;
}
lista += "</ul>";

document.querySelector("#lista").innerHTML = lista;


// - 2. feladat: -
let osztok = [];
for (let i = 2; i < numero; i++) {
    let maradek = numero % i;
    if (maradek === 0) osztok.push(i);
}

var felsorol = "";

if (osztok.length === 0) {
    felsorol = `A(z) ${numero} számnak nincs valódi osztója.`;
}
else {
    felsorol = `A ${numero} valódi oszói: `;

    for (let oszto in osztok) {
        felsorol += `<span class="result">${osztok[oszto]}</span>; `;
    }
}
document.querySelector("#felsorol").innerHTML = felsorol;


// - 3. feladat: -

// A prímszám ellenörző függvény:
function prim(szam) {
    let primszam = true;

    for (let i = 2; i <= szam / 2; i++) {
        if (szam % i === 0) {
            primszam = false;
            break;
        }
        else {
            primszam = true;
        }
    }
    return primszam;
}


function kiir(strSzam) {

    let szam = parseInt(strSzam);
    console.log(szam);

    if (!szam) {
        document.querySelector("#prim").innerHTML = "Csakis számot szeretnénk itt is kérni!";
    }
    else {
        document.querySelector("#prim").innerHTML = prim(szam) ? `Az adott szám: ${szam} - PRÍM szám` : `Az adott szám: ${szam} - NEM PRÍM szám`;
    }
}


// - 4. feladat - 
// Készítettem egy függvényt a tábla rajzoláshoz még jól jöhet:

function tablicska(feltetel) {

    var tablazat = `A ${feltetel}k listája:<br>
            <table>
                    <tr>
                        <th>Vezetékneve</th>  
                        <th>Keresztneve</th> 
                    </tr>`;

    for (let i = 0; i < emberek.length; i++) {

        if (emberek[i].position == feltetel) {

            tablazat += `<tr>
                        <td>${emberek[i].firstName}</th>  
                        <td>${emberek[i].lastName}</th>  
                    </tr>`;
        }
    }
    tablazat += "</table>";

    return tablazat;
}
document.querySelector("#tabla").innerHTML = tablicska("vezető");


// - 5. feladat -
function cegunk(beoszt) {
    let uzenet = "";
    if (beoszt == "") {
        uzenet = "Nos? Nem választ?";
    }

    else if (beoszt == "dolgozó") {
        uzenet = tablicska("dolgozó");
    } 
    
    else {
        uzenet = tablicska("vezető");
    }
    document.querySelector("#valasztott").innerHTML = uzenet;
}