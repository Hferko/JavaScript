/*
    Házi 01
​
    1. prompt segítségével kérjetek be egy felhasználónevet, majd köszöntsétek név szerint a html oldalon
    2. prompt segítségével kérjetek be 2 számot, és egy alert ablakba mutassátok meg a nagyobbat.
    3. A 2. alkalmunkkon bekértünk 2 számot, amiket "a" és "b" változókba tároltunk el. Majd megjelenítettük
       a HTML oldalon a 2 szám szorzatának műveletsorát. Hasonlóképpen, jeleítsétek meg egymás alá, az összes
       aritmetiaki műveletet a 2 szám közt.
​
       3.1 Próbáljátok meg kiszínezni a műveletsorokat template string segítségével. (akár css osztályokat is használhattok hozzá)
           a számok legyenek kék színüek, és az operátorok legyenek zöld színüek.
​
    4. Döntsétek el "a" értékéről, hogy páros, illetve páratlan-e, és az eredményt mutassátok meg konzolban.
    5. az "age" változóról döntéstek el, hogy 25 és 35 év közt van-e vagy sem. Az eredményt jelenítsétek meg konzolban.
​
*/

// 1. feladat:

let neve = prompt("Hogyan is szólíthatom ? \n\t😉\nKérem írja ide becses nevét:");

if (neve !== "" && neve !== null) {
    document.querySelector("#welcome").innerHTML =
        `Üdvözlöm Önt <strong style="color: red;">${neve} </strong> az oldalon!`;
}
else {
    while (neve == "" || neve === null) {
        neve = prompt("Talán, ha a nevét lenne szíves...");
    }
}
document.querySelector("#welcome").innerHTML =
    `Üdvözöllöm Önt <strong style="color: red;">${neve} </strong> az oldalon!`;

console.log("Bejelentkezett user: " + neve);

// - 2. feladat

function hasonlit() {
    let a = parseInt(document.getElementById("egy").value);
    let b = parseInt(document.getElementById("ketto").value);
    let eredmeny;
    if (isNaN(a) || isNaN(b)) {
        eredmeny = "Talán valamely adat nem is egy szám.\n Így nem hasonlítható a kettő össze!";
    }
    else {
        eredmeny = a > b ?
            `Az első szám, a(z) ${a} nagyobb, mint a második, ami ${b} ! \nVagyis ${a} > ${b}` :
            `A második, a(z) ${b} nagyobb, mint az első, ami ${a} ! \nVagyis ${b} > ${a} `;

        // - 3. feladat 
        let muveletek = ["+", "-", "*", "/", "%", "<sup>"];
        let kiszamol = [a + b, a - b, a * b, (a / b).toFixed(2), a % b, a ** b];
        let kiszamol2 = [b + a, b - a, b * a, (b / a).toFixed(2), b % a, b ** a];

        let tablazat = document.createElement("TABLE");

        for (let i = 0; i < muveletek.length; i++) {
            let sor = tablazat.insertRow(i);
            sor.insertCell(0).innerHTML = `<span class="kek">${a}</span> ${muveletek[i]} <span class="kek">${b}</span>`;
            sor.insertCell(1).innerHTML = `<span class="result">= ${kiszamol[i]} </span>`;
            sor.insertCell(2).innerHTML = `<span class="kek">${b}</span> ${muveletek[i]} <span class="kek">${a}</span>`;
            sor.insertCell(3).innerHTML = `<span class="result">= ${kiszamol2[i]} </span>`;
        }

        let sor = tablazat.insertRow(muveletek.length);
        let cell1 = sor.insertCell(0);
        let cell2 = sor.insertCell(1);
        let cell3 = sor.insertCell(2);
        let cell4 = sor.insertCell(3);
        cell1.innerHTML = `<span class="kek"><sup>${a}</sup></span> &#8730; <span class="kek">${b}</span>`;
        cell2.innerHTML = `<span class="result">= ${(b ** (1 / a)).toFixed(2)}`;
        cell3.innerHTML = `<span class="kek"><sup>${b}</sup></span> &#8730; <span class="kek">${a}</span>`;
        cell4.innerHTML = `<span class="result">= ${(a ** (1 / b)).toFixed(2)}`;


        document.getElementById("tablazat").innerHTML = "";
        document.getElementById("tablazat").appendChild(tablazat);

        // - 4. feladat
        document.getElementById("feladat4").innerHTML = "A 4. feladat megoldása a konzolra került kiírásra";
        if ((a % 2) === 0) {
            console.log("A(z) " + a + " szám PÁROS szám.")
        }
        else {
            console.log("A(z) " + a + " szám PÁRATLAN szám.")
        }
    }

    document.querySelector("#eredmeny").innerHTML = eredmeny;
    alert(eredmeny + "\n😀\nA 4. feladat megoldása a konzolra került kiírásra");
}

// - 5. feladat
function ellenor() {
    const ma = new Date();
    let ezEv = parseInt(ma.getFullYear());
    let szuletett = document.getElementById("datum").value;
    szuletett = parseInt(szuletett);

    if (szuletett > ezEv || isNaN(szuletett)) {
        document.getElementById("korod").innerHTML = 'Ön még meg sem született?';
        console.log('Ön még meg sem született?')
    }
    else {
        let age = ezEv - szuletett;
        let hadrafoghato = "";
        if (age >= 25 && age <= 35) {
            hadrafoghato = 'Keresett személy megtalálásra került. Életkora: ' + age + ' év, tehát 25 és 35 év közötti, megfelel a feltételeknek.';
        }
        else if (age < 25) {
            hadrafoghato = 'Fiatal, ' + age + ' éve miatt (25 év alatt van) nem ő a megfelelő alany.';
        }
        else {
            hadrafoghato = 'A kora (' + age + ' év) 35 év felett van, túlkorosnak tűnik.';
        }

        document.getElementById("korod").innerHTML = hadrafoghato;
        console.log(hadrafoghato);
    }
}