/* 
1. Feladat: [Onlinepincér folytatása] Vegyetek fel egy globális rendelések változót, mely legyen tömb;
        A HTML oldalon a "Rendelek" gomb mellé hozzatok létre egy "Rendeléseim" felíratú gombot is.
​
        1.a. Minden rendeléskor, adjátok hozzá a rendelt italt a rendelesek tömbhöz.*/

var rendelesek = [];

console.log("OnlányPincér");

function rendeles() {

    let rendel = document.querySelector("#rendeles").value;
    let tetel = document.querySelector("#tetel").innerHTML = rendel + " rendel...";;

    switch (rendel) {

        case "cola":
            console.log("Máris hozom a kólát!");
            rendelesek.push(rendel);
            tetel;
            break;

        case "limonádé":
            console.log("Nagyon finom limonádét készítünk!");
            rendelesek.push(rendel);
            tetel;
            break;

        case "kávé":
            console.log("Tejjel vagy tejszinnel parancsolja?");
            rendelesek.push(rendel);
            tetel;
            break;

        case "víz":
            console.log("Hozom a vizet!");
            rendelesek.push(rendel);
            tetel;
            break;

        case "gyümölcslé":
            console.log("Frissen facsartuk!");
            rendelesek.push(rendel);
            tetel;
            break;

        default:
            console.log("Sajnos ez " + rendel + " nincs az itallapon");
            rendelesek.push("nincs az itallapon");
            document.querySelector("#tetel").innerHTML = "";
            break;
    }

    document.querySelector("#rendeles").value = "";
    document.querySelector("#lista").innerHTML = "<small>Eközben a konzolon is történnek események...</small>";
}


/* 1.b. Feladat: A "Rendeléseim" gombra kattintva, jeleítsétek meg az oldalon egymás alá a rendelt italokat.
    (pl.: egy html listában) */

var rendelesVege = document.querySelector("#rendelesVege");// Többször fogom a lekérdezést használni, elmentettem változóba

/*      Tanultuk, hogy 'erősen' javasolt nem hívni a HTML kódban JavaScript függvényt.
        Ezért mertem próbálkozni így a megoldással: */

document.querySelector("#osszRendeles").addEventListener("click", function () {
    document.querySelector("#tetel").innerHTML = "";

    var lista = `Eddigi rendeléseim összesen:
                 <ul>`;
    for (let ital of rendelesek) {

        lista += `<li>${ital}</li>`;
    }
    lista += "</ul>";

    document.querySelector("#lista").innerHTML = lista;
    rendelesVege.classList.remove("rejtve");
});


/*
2. Feladat: Írjatok egy osszead függvényt, mely paraméterként megkap egy tömböt, és visszatér a tömb elemeinek összegével.
       (a megoldáshoz használjatok for ciklust)
*/
function osszead(tomb) {
    osszeg = 0;

    for (let elem in tomb) {
        osszeg += tomb[elem];
    }
    return osszeg;
}


/*
3. Feladat:  Hozzatok létre egy tömb változót. És prompt segítségével addig kérjetek be számokat, 
        amíg a számok összege el nem éri a 100-at.
        (Az összeg teszateléséhez használjátok a 2. feladatban megírt függvényt)       
*/

var tombValtozo = [];
let osszeg = 0;

function harmadikFeladat() {

    osszeg = 0; // Lenullázom tömböt és az összeget, hogy újra használható legyen
    tombValtozo.length = 0;

    do {
        let szam = parseInt(prompt("3. Feladat: \n Kérek egy EGÉSZ SZÁMOT:\n"));

        // Szűröm, ha string-et ír be a felhasználó:
        while (!szam) szam = parseInt(prompt("⛔️ Ez nem volt szám. \n Talán egy SZÁMOT, ha lehetne...\n"));

        tombValtozo.push(szam);
        osszeg = osszead(tombValtozo);
        console.log(osszeg);

    } while (osszeg < 100);

    alert("A tömb MEGTELT, elemeinek összege jelenleg: \n\t" + osszeg);
    rendelesVege.classList.add("rejtve");
}

rendelesVege.addEventListener("click", harmadikFeladat);


/*
4. Feladat: Írjatok egy korosztály függvényt, mely bemenetként megkapja egy személy életkorát (hogy hány éves), 
       kimenetként pedig visszatér az életkornak megfelelő stringgel.
       (Ezúttal nem if-else, hanem switch-case vezérlési szerkezetet használva.)       
*/

var eletkor = document.querySelector('input[name="eletkor"]');

// Életkor bekérő függvény
function getAge() {

    var kora = 0;

    if (eletkor.value === "0") {
        kora = 0;
        return kora;
    }
    else {
        kora = parseInt(eletkor.value);

        if (!kora || kora < 0) {

            eletkor.value = "";
            document.querySelector("#nos").textContent = '⛔️ Vajon milyen idős is ön?';
            return 0;
        }
        else {
            return kora;
        }
    }
}


eletkor.addEventListener("change", function () {

    let age = getAge();

    let allapota = `Ha ön most ${age} éves, akkor ön`;

    switch (true) {
        case (age <= 1):
            allapota += '<b style="color: maroon"> Csecsemő</b>';
            break;

        case (age <= 3):
            allapota += '<b style="color: maroon"> Baba</b>';
            break;

        case (age <= 10):
            allapota += '<b style="color: maroon"> Kölök</b>';
            break;

        case (age <= 14):
            allapota += '<b style="color: maroon"> Serdülő</b>';
            break;

        case (age < 18):
            allapota += '<b style="color: maroon"> Kamasz</b>';
            break;

        case (age < 70):
            allapota += '<b style="color: maroon"> Felnőtt</b>';
            break;

        case (age <= 80):
            allapota += '<b style="color: maroon"> Öreg</b>';
            break;

        case (age <= 90):
            allapota += '<b style="color: maroon"> Vén</b>';
            break;

        case (age <= 100):
            allapota += '<b style="color: maroon"> Matuzsálem</b>';
            break;

        default:
            allapota += '<b style="color: maroon"> Felnőtt</b>';
            break;
    }

    document.querySelector("#allapota").innerHTML = allapota
});


/*
5. Írjatok egy függvényt, mely bemeneti paraméterként megkap 2 tömböt, és visszatér a 2 tömb közös halmazával.
       Vagyis egy tömbbel mely tatalmazza azaokat az elemeket, melyek mindkét tömbbe benne vannak.
       (A megoldásokhoz szorítkozzatok az eddig tanult vezérlési szerkezetekre, mert most már nem a hozott,
        vagy interneten talált megoldásokra leszek kiváncsi, hanem arra, amit eddig tanultunk.) */

// A függvény --------------
function tombokMetszete(tomb1, tomb2) {
    metszetHalmaz = [];

    for (let elem1 in tomb1) {

        for (let elem2 in tomb2) {

            if (tomb1[elem1] === tomb2[elem2]) {
                metszetHalmaz.push(tomb1[elem1]);
            }
        }
    }
    /* Itt gyanús, hogy a megrendelő nem véletlenül kért vissza "halmazt" megoldásnak,
       ami nem tartalmazhat két azonos elemet. Így ki kell szednem a kapott tömb elemei közül azokat, 
       melyek már egyszer előfordultak*/

    for (let i = 0; i < metszetHalmaz.length; i++) {

        for (let j = (i + 1); j < metszetHalmaz.length; j++) {

            if (metszetHalmaz[i] === metszetHalmaz[j]) {
                delete metszetHalmaz[j];
            }
        }
    }
    return metszetHalmaz;
}
// ---------------------------------------

function tombKiir(tomb) {

    let text = "";
    for (let elem of tomb) {

        if (elem !== undefined) {
            text += elem + "; ";
        }
    }
    return text;
}

// A feladat függvényének próbája:
document.querySelector("#halmaz").addEventListener("click", function () {

    // A két bemenetei tömb:
    let tomb1 = [];
    let tomb2 = [];

    for (let i = 0; i < 20; i++) {
        tomb1.push(Math.trunc(Math.random() * 31));
    }

    for (let i = 0; i < 10; i++) {
        tomb2.push(Math.trunc(Math.random() * 21));
    }

    let metszet = tombokMetszete(tomb1, tomb2);
    console.log(tomb1);
    console.log(tomb2);
    console.log(metszet);

    document.querySelector("#tombok").innerHTML = `A két próbatömb:<br>[ ${tombKiir(tomb1)} ]<br><br>[ ${tombKiir(tomb2)} ]`;
    document.querySelector("#metszet").innerHTML = `És a közös-halmazuk:<br><b>[ ${tombKiir(metszet)} ]</b><br><br>konzolon is...`;
});


/*
6. Írjatok egy függvényt, mely feltölt egy tömböt sakktábla szerűen. Vagyis, ami előállít egy sakktáblát.
       Bementi paraméterként megkapja a függvény, hogy a tábla hányszor, hányas legyen, majd előállít egy mátrixot
       melyben a fehér négyzeteket 0, míg a fekete négyzeteket 1 jelöli. 
​
       Tehát, ha a bemeneti paraméter 4, akkor a következő képpen nézzen ki a kigenerált mátrix.
       [
         [0, 1, 0, 1],
         [1, 0, 1, 0],
         [0, 1, 0, 1],
         [1, 0, 1, 0]
       ]
       vagyis, mint a sakktábla.
*/

function sakkTabla(hossza, szeles) {
    let matrix = [];

    for (let j = 0; j < hossza; j += 2) {
        matrix[j] = [];

        for (let i = 0; i < szeles; i += 2) {
            matrix[j][i] = 0;
        }
        for (let i = 1; i < szeles; i += 2) {
            matrix[j][i] = 1;
        }
    }

    for (let j = 1; j < hossza; j += 2) {
        matrix[j] = [];

        for (let i = 1; i < szeles; i += 2) {
            matrix[j][i] = 0;
        }
        for (let i = 0; i < szeles; i += 2) {
            matrix[j][i] = 1;
        }
    }
    return matrix;
}

document.querySelector("#matrix").addEventListener("click", function () {

    var gridString = "";
    var content = document.querySelector("#content");

    let hossza = document.querySelector("#hosszu").value;
    let szeles = document.querySelector("#szeles").value;

    if (hossza === "" || szeles === "") {
        gridString = "Nem adta meg az egyik adatot !";
    }
    else {
        console.log(sakkTabla(hossza, szeles));

        let matrix = sakkTabla(hossza, szeles);

        for (let i = 0; i < matrix.length; i++) {

            gridString += '<div class="row">';

            for (let j = 0; j < matrix[i].length; j++){
                if (matrix[i][j] % 2 === 1) {
                    gridString += `<div class="cell" style="background-color:aqua;">${matrix[i][j]}</div>`;
                }
                else {
                    gridString += `<div class="cell">${matrix[i][j]}</div>`;
                }
            }
            gridString += "</div>";
        }
    }
    content.innerHTML += gridString + "<br>";
});

/*
       Jó munka volt, köszi
*/