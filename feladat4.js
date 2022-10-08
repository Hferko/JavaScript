/*
​
/*---------- Gyakorlatok Stringekkel -----------------
!!!!!! Az alábbi feladatokhoz ne használj reguláris kifejezéseket !!!!!!!
​
    1. Kerjetek be prompt segitsegevel egy nevet Es konzolban jelenitsetek meg ennek a nevnek a monogramjat
       (tehat a kezdobetuit)
    2. kerjetek be egy hosszab szoveget, es konzolban irjatok ki a szoveg mondatainak a szamat.
​
    3. Írj függvényt, mely bemeneti paraméterként megkap egy fájlnevet, kimenetként pedig visszatér 
       a fájl kiterjesztésével.
​
    4. írjatok egy getMonth("2022-10-6") nevezetű függvényt, mely bemenetként megkap egy datum stringet
       YYYY-MM-DD dátimformátumban és kiírja a dátumban szereplő hónapot.
​
       4.a Ha megvagytok, írjátok meg azt a változatát amikor nemcsak egy dátumot kap meg függvény, 
         hanem azt is, hogy mit kértek vissza, (month, year, vagy day) és a dátumstringből a megfelelő értéket 
         térítí vissza.
         pl: getDateParam("2022.10.06", "year") esetén a visszatérési érték 2022 legyen.    
*
​
/*
​
--------- Gyakorlatok reguláris kifejezésekkel------
​
    re.1. Adott az alábbi string
*/
var cicus = "Cirmi délben eszik majd alszik egy nagyot. Aztán ha felkelt játszik egyet.";

/*
    Reguláris kifejezés segítségével szedjük ki a "cicus" változó tartalmból az ik-es igéket.
*/

/*
    re.2. irjatok regularis kifejezest, mely egy szovegbol kiveszi a datumido karakterlancokat pl 2021.09.28 09:59 (UTC)
    re.3. Irjunk regularis kifejezest mely kiveszi egy sztringbol az aritmetikai muveleteket. (nem csak a muveletjeleket, hanem a a muveletsort)
    re.4. Írjunk reguláris kifejezést, amely a teljes nevekre illeszkedik (Csaladnev Keresztnev)
*/



/*---------- Gyakorlatok Stringekkel -----------------
!!!!!! Az alábbi feladatokhoz ne használj reguláris kifejezéseket !!!!!!!*/

/*1. Feladat:
    Kerjetek be prompt segitsegevel egy nevet Es konzolban jelenitsetek meg ennek a nevnek a monogramjat
    (tehat a kezdobetuit)*/

function monogram() {
    let monogram = "";

    //  Könnyebb az életem, ha mindjárt nagybetűssé alakítom az egészet
    let neve = prompt("1. Feladat: \n Kérlek mutatkozz be, mi a teljes neved?\n").toUpperCase();
    console.log("A felhasználó neve: " + neve);

    /* Ha talán eszébe jutna Dr., Mr., vagy más prefixum a neve elé, illetve, ha van kötőjel a nevében
        azokat kiszedem, és Levágom az elejéről, végéről a whitespace-t*/
    neve = neve.slice(neve.indexOf(".") + 1).trim().replace("-", " ");

    const nevei = neve.split(" ");
    console.log(nevei);

    for (let nev of nevei) {

        let kezdobetu = "";

        if (nev[0] + nev[1] + nev[2] == "DZS") {

            monogram += "DZS" + ". ";
        }
        else {

            kezdobetu = nev[0].concat(nev[1]);

            switch (kezdobetu) {
                case "CS":
                    monogram += kezdobetu + ". ";
                    break;

                case "DZ":
                    monogram += kezdobetu + ". ";
                    break;

                case "GY":
                    monogram += kezdobetu + ". ";
                    break;

                case "LY":
                    monogram += kezdobetu + ". ";
                    break;

                case "NY":
                    monogram += kezdobetu + ". ";
                    break;

                case "SZ":
                    monogram += kezdobetu + ". ";
                    break;

                case "TY":
                    monogram += kezdobetu + ". ";
                    break;

                case "ZS":
                    monogram += kezdobetu + ". ";
                    break;

                default:
                    monogram += nev[0] + ". ";
                    break;
            }
        }
    }
    console.log("1. FELADAT");
    console.log("A felhasználó monogramja: " + monogram);

    document.querySelector("#kiir").innerHTML = "A felhasználó monogramja: <h4>" + monogram + "</h4>";
    return monogram;
}

document.querySelector("#monogram").addEventListener("click", monogram);


/*2. Feladat: 
    Kérjetek be egy hosszab szöveget, és konzolban irjátok ki a szöveg mondatainak a számát.*/

function mondatok() {

    const szoveg = document.querySelector("#szoveg").value;

    let ujText = szoveg.trim().replaceAll("...", "").replaceAll(".\n", "|").replaceAll(". ", "|").replaceAll("?", "|").replaceAll("!", "|");
    /* A "..." bezavarhatnak, lecserélem. Ha a szövegben vannak file nevek, az abban lévő pontok mentén is darabol, ez nem jó, maradniuk kell.
    Így tehát a mondat végi pontokat kell lecserélnem, illetve az egyéb mondat végét jelző írásjeleket (remélhetően "|" nem lesz a szövegben)*/

    //console.log(ujText);

    const mondatok = ujText.split("|");
    console.log(mondatok);

    console.log("2. FELADAT");
    console.log("Ebben a szövegben " + mondatok.length + " mondat található.");
    document.querySelector("#mondatSzam").innerHTML = "A szövegben: " + mondatok.length + " mondat található.<br><small> Konzolon a text.split() is látható.</small>";
}

document.querySelector("#mondatok").addEventListener("click", mondatok);


/* 3. Feladat:
    Írj függvényt, mely bemeneti paraméterként megkap egy fájlnevet, kimenetként pedig visszatér a fájl kiterjesztésével. */

function extension(fileNev) {

    return fileNev.slice(fileNev.lastIndexOf(".") + 1);
}

document.querySelector("#tipus").addEventListener("click", function () {

    let fileNev = document.querySelector("#file").value;
    if (fileNev == "") document.querySelector("#kiterjeszt").innerHTML = " Nem kaptam egy file-nevet sem";

    else {
        document.querySelector("#kiterjeszt").innerHTML = ` <b> ${extension(fileNev)} </b>`

        console.log("3. FELADAT");
        console.log(extension(fileNev));
    }

});


/*4. Feladat: írjatok egy getMonth("2022-10-6") nevezetű függvényt, mely bemenetként megkap egy datum stringet
       YYYY-MM-DD dátumformátumban és kiírja a dátumban szereplő hónapot. */

let datumTomb = (datum) => datum.split("-");

function getMonth(datum) {

    let ho = datumTomb(datum)[1];
    let honap = "";
    switch (ho) {
        case "01":
            honap = "Január"
            break;
        case "02":
            honap = "Február"
            break;
        case "03":
            honap = "Március"
            break;
        case "04":
            honap = "Április"
            break;
        case "05":
            honap = "Május"
            break;
        case "06":
            honap = "Június"
            break;
        case "07":
            honap = "Július"
            break;
        case "08":
            honap = "Augusztus"
            break;
        case "09":
            honap = "Szeptember"
            break;
        case "10":
            honap = "Október"
            break;
        case "11":
            honap = "November"
            break;
        case "12":
            honap = "December"
            break;
    }
    return "A hónap: " + ho + "-ik, tehát " + honap;
}
// 4. feladat eddig -----------------------------------


/* 4.A Feladat: Ha megvagytok, írjátok meg azt a változatát amikor nemcsak egy dátumot kap meg függvény, 
    hanem azt is, hogy mit kértek vissza, (month, year, vagy day) és a dátumstringből a megfelelő értéket 
    térítí vissza.
         pl: getDateParam("2022.10.06", "year") esetén a visszatérési érték 2022 legyen.     */

function getDateParam(datum, idoszak) {

    let adat = "";
    switch (idoszak) {
        case "year":
            adat = `A dátumban mejelölt év: ${datumTomb(datum)[0]}`;
            break;

        case "month":
            adat = getMonth(datum); // használom kell az előbb megírt függvényt
            break;

        case "day":
            adat = `A dátumban mejelölt nap: ${datumTomb(datum)[2]}.`;
            break;

        default:
            adat = "Nem jelölte meg a kívánt értéket";
            break;
    }
    return adat;
}

let valasztott = document.querySelector("#ertek");

document.querySelector("#date").addEventListener("change", function () {
    valasztott.disabled = false;
});


valasztott.addEventListener("change", function () {
    datum = document.querySelector("#date").value;
    idoszak = valasztott.value;

    console.log("4/A FELADAT");
    console.log(getDateParam(datum, idoszak));

    document.querySelector("#eredmeny").textContent = getDateParam(datum, idoszak);
});

//____________________________________________________________________________________________________________

/* --------- Gyakorlatok reguláris kifejezésekkel------​*/

function regExp() {

    /*re.1. Adott az alábbi string:   */

var cicus = "Cirmi délben eszik majd alszik egy nagyot. Aztán ha felkelt játszik egyet és iszik.";

/* re.1. Reguláris kifejezés segítségével szedjük ki a "cicus" változó tartalmból az ik-es igéket. */

function verbs(text) {

    console.log("\nREGULÁRIS KIFEJEZÉSEK 1.");
    console.log(text);

    console.log(text.match(/ik ?/g));

    let cicusTomb = text.replaceAll(".", " ").split(" ");
    let ikesIgek = [];
    let minta = /ik$/g;
    //let minta = /ik ?/g; - ez is jónak mutatkozott

    for (let i in cicusTomb) {
        if (cicusTomb[i].match(minta) !== null)
            ikesIgek.push(cicusTomb[i]);
    }

    console.log("Az ikes igék halmaza: " + ikesIgek);
    return ikesIgek;
}
verbs(cicus);


/* re.2. irjatok regularis kifejezest, mely egy szovegbol kiveszi a datumido karakterlancokat pl 2021.09.28 09:59 (UTC) */

let szoveg = "Írjatok regularis kifejezest, mely egy szovegbol kiveszi a datumido karakterlancokat pl 2021.09.28 09:59 (UTC)"

let datumido = szoveg.match(/[0-9]{4}.[0-9]{2}.[0-9]{2} [0-9]{2}:[0-9]{2}/g);

console.log("\nREGULÁRIS KIFEJEZÉSEK 2.");
console.log("A dátum a szövegben: " + datumido);


/* re.3. Irjunk regularis kifejezest mely kiveszi egy sztringbol az aritmetikai muveleteket. 
(nem csak a muveletjeleket, hanem a a muveletsort) */

let  bemenetiText= `Ha nem megfelelően használjuk vagy egyáltalán nem is vesszük figyelembe a műveleti sorrendet, 
                    egészen más eredményt kapunk. Pl. 6-1*0+2/2=7, 
                    ha azonban nem vesszük figyelembe a műveleti sorrendet, 
                    vagyis hibásan használjuk a matematikai műveleteket, 1 az eredmény.
                    Magamnak készítek még néhány próbát: 5 + 4 = 9, 2200 % 110 = 0, 22*11=242`;

let aritmetika = bemenetiText.match(/([0-9]+\s?[\+\-\*\/%]{1,2}\s?[0-9]+)+\s?=\s?[0-9]+/g);

console.log("\nREGULÁRIS KIFEJEZÉSEK 3.");

console.log("Az aritmetikai műveletek a szövegben:");
console.log(aritmetika); // sajnos ezzel csak a kétoperandusú műveleteket tudtam megtalálni


/* re.4. Írjunk reguláris kifejezést, amely a teljes nevekre illeszkedik (Csaladnev Keresztnev) */

let teszt = `1939-ben Vincent Atanasoff és asszisztense, 
            Clifford Berry megterveztek egy csak elektronikus egységekből álló digitális alapú számológépet, 
            az Atanasoff-Berry Computer-t (ABC). Ezt tekintjük egyben a világ első számítógépének.`;

let egyik = teszt.match(/[A-ZÉÁŐÚŰÖÜÓÍ]\w?[a-zéáőúűöüóí]\w+\s[A-ZÉÁŐÚŰÖÜÓÍ]\w?[a-zéáőúűöüóí]\w+/g);

console.log("\nREGULÁRIS KIFEJEZÉSEK 4.");
console.log("Ezeket a neveket találtam a szövegben: " + egyik);
}

document.querySelector("#regex").addEventListener("click", regExp);
