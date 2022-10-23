'use strict';
console.log("Objektum Orientált Program ");

/*
    1. Készíts egy olyan osztályt, mely egy tömböt tárolására alkalmas, és
        - Képes kiszamolni az elemek összegét, átlagát, minimumát, maximumát (ezek egy-egy külön függvény legyenek)
        - Egy másik ugyanilyen példány tömbjének elemeiből képes átvenni azokat az elemeket, amelyek még nem szerepelnek saját
        magában
*/


function sorsol() { // Tömbfeltöltő függvény

    let hossz = document.querySelector('input[name="elso"]').value;
    hossz = parseInt(hossz);

    let tomb = [];
    for (let i = 0; i < hossz; i++) {

        tomb.push(Math.trunc(Math.random() * 50));
    }
    return tomb
}

let array1 = new Object();
let array2 = new Object();

document.querySelector('#szamol1').addEventListener("click", function () {

    let tomb1 = sorsol();
    console.log(tomb1);
    document.querySelector("#tomb1").innerHTML = tomb1.join("; ");

    // gombokról leveszem a tiltást
    document.getElementById("szamol2").disabled = false;
    document.getElementById("osszeg").disabled = false; 
    document.getElementById("atlag").disabled = false; 
    document.getElementById("minimum").disabled = false; 
    document.getElementById("maximum").disabled = false; 

    array1 = new Tombok(tomb1);    // A Tömbök osztályból pédányosítok egyet a tomb1 feéhasználásával    

    return array1;
});

document.querySelector('#szamol2').addEventListener("click", function () {

    let tomb2 = sorsol();
    console.log(tomb2);
    document.querySelector("#tomb2").innerHTML = tomb2.join("; ");

    document.getElementById("masik").disabled = false;

    array2 = new Tombok(tomb2, array1.eredetiTomb());   // Példányosítom a tomb2-vel is, de hozzáveszem az előző példány tömbjét is

    return array2;
});


// A gombok kattintására sorban meghívom az osztály metódusait:
document.querySelector('#osszeg').addEventListener("click", function () {
    console.log("Összeg: "+ array1.osszeg());
    document.querySelector("#ossz").innerHTML = "Az elemek összege:<br>" + array1.osszeg();
});

document.querySelector('#atlag').addEventListener("click", function () {
    console.log("Atlag: "+ array1.atlag());
    document.querySelector("#atl").innerHTML = "Az elemek átlaga:<br>" + array1.atlag().toFixed(2);
});

document.querySelector('#minimum').addEventListener("click", function () {
    console.log("Minimum: "+ array1.mini());
    document.querySelector("#min").innerHTML = "A legkisebb elem a tömbben:<br>" + array1.mini();
});

document.querySelector('#maximum').addEventListener("click", function () {
    console.log("Maximum: "+ array1.maxi());
    document.querySelector("#max").innerHTML = "A legnagyobb elem a tömbben:<br>" + array1.maxi();
});

// A második tömb-példány metódusainak hívása
document.querySelector('#masik').addEventListener("click", function () {

    let text = "Összeg: " + array2.osszeg() +"<br>";
    text += "Átlag: " + array2.atlag().toFixed(2) +"<br>";
    text += "Minimum: " + array2.mini() +"<br>";
    text += "Maximum: " + array2.maxi() +"<br>";

    document.querySelector("#eredmey").innerHTML = text;

    let osszevont = array2.noveltTomb();
    document.querySelector("#osszevonva").innerHTML = osszevont.join("; ");

    document.querySelector("#sorba").innerHTML = osszevont.sort( (a, b) => a - b ).join("; ");    
});


/*
    2. Készítsük el az online pincér OOP változatát.
        - Az osztály (nem a példány) rendelkezzen egy itallappal (ami egy objekt adattipus es a kulcsok az rendelheto italok nevei)

*/
let itallap = {
    cola: {
        name: "Coca Cola",
        text: "Amit a pincér mond",
        ar: 350,
        mennyiseg: "2,5 dl"
    },
    limonade: {
        name: "Limonádé",
        text: "Amit a pincér mond",
        ar: 300,
        mennyiseg: "3 dl"
    }
    //...
}
/*
        - mert ez közös
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

/*
    3. Valósíts meg egy cica osztályt:
        - a következő adatokkal: neve, súlya, és hogy éhes-e (az éhes legyen boolean típusú)
        - Az osztálynak legyen egy eszik metódusa, ami egy float értéket vár (étel mennyisége), 
        és egy boolean-al tér vissza (sikeres volt -e az etetés). Ha a macska éhes, az etetés
        sikeres, és a súlya nőjön az étel mennyiségével. A macska ezután ne legyen éhes. Ha a
        macska nem éhes, az etetés nem sikeres.
        -Az osztálynak legyen egy futkos metódusa, ami nem vár paramétert. A macska
        súlya csökkenjen 0.1-el, és ha nem volt éhes, akkor éhezzen meg.
        
*/

/*
    4. Hasonlóan a Cica osztályhoz, írjuk egy Auto osztályt!

    - Az Auto osztály konstruktorában állítsuk be az autó rendszámát, az üzemanyagtartály méretét literben,
      az autó átlagfogyasztását (Hány litert fogyaszt 100km-en), és azt, hogy az auto eddig hány km-et tett meg.

    - rendelkezzen a egy tankol metódussal, ami paraméterként megkapja, hogy hány litret szeretnénk tankolni.
        - A tankolás sikeres, ha a tartályba belefér még a tankolni kívánt mennyiség
        - A tankolás sikertelen, ha nem fér bele a kívánt mennyiség.
        - A metódus visszatér a tankolás sikerével vagy sikertelenségével, azaz egy logikai típussal.

    - rendelkezzen egy szervíz (szerviz) metódussal, ami lefut előszőr a konstruktorban.
        - Ez a 10 000 km-enkénti kötelező szervízet jelenti.
        - ha megtettünk vele 10 000 km tvolságot, kötelezően szervízelni kell, anékül ne indulhasson el az autó.
          szervíz után természetesen ez a számláló nullázódik.

    - rendekezzen egy száguld (szaguld) metódussal, ami paraméterben megkapja az utazás távolságát km-ben.
        - az üzemanyag fogyjon annyival, amennyi szükséges a megtenni kívánt távolság megtételéhez.
        - a megtett km-ek növekedjen a megtett út hosszával.
        - ha nincs elegendő üzemanyag, az autó ne induljon es térjen vissza "tankolj" üzenettel.
        - ha eljött a kötelező szervíz ideje, az autó ne induljon el és térjen vissza "szerviz" üzenettel.
        - ha sikeresen megtette a távot, térjen vissza "siker" üzenettel.
*/

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

/*
    Egy kis random:
    Mivel ezt még nem tanultuk, itt adok hozzá instrukciót!

    A random, az nem más, mi nt egy véletlen generátor és a Math osztályban foglal helyet.
    HAsználata egyszerű: 
*/
var rand = Math.random();
/*
    Ahogy látjátok, a rand értéke minden esetben 0 és 1 közt van, ezért annyival kell beszoroznunk,
    amennyit max kapni szeretnénk. Tehát, ha 1 és 10 közt szeretnénk véletlenszerűen kapni egy 
    számot, akkor beszorozzuk 10-el.
*/
var veletlenTizAlatt = Math.random() * 10;
/*
    Így már a változónk értéke látjátok, hogy közelít ahhoz, amit szeretnénk. Ám még mindeig nem egész számok
    Ezért fel vagy le kell kerekíteni őket.

    Ehhez ugyancsak a Math object szolgáltat 3 lehetőséget:
        - Math.round(szam) - Ez .5 felett felfele, míg .5 alatt lefele kerekít. (teszteld konzolban)
        - Math.floor(szam) - Ez mindenképpen lefele kerekít, tehát a 4.9 is 4 lesz.
        - Math.ceil(szam) - Ez mindenképpen felfele kerekít, tehát a 9.1 is 10 lesz.
    
    Tehát az előbbi véletlen generátorhoz használjuk kerekítést
*/
var veletlenSzam = Math.ceil(Math.random() * 10);
/*
    Most már a veletlenSzam értéke biztos, hogy minden esetben 1 és 10 között lesz (ami a 10-et is tartalmazni fogja)
    Szóval ahhoz, hogy egy indexet kisorsoljunk egy 90 elemű tömbből, oda csupán annyit kell tennünk, hogy 
    a ceilt floor metódusra cseréljük, hogy a 0 is játszon, és határértéknek 91-et adjunk, hogy legyen benne a 90 is
*/

/*
    Jó munkát!
*/
