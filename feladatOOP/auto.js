'use strict';

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

class Auto{

    constructor(rendszam, tank, fogyaszt, ossz_km, szakasz_km){

        this.rendszam = rendszam;
        this.tank = tank;
        this.fogyaszt = fogyaszt;
        this.ossz_km = ossz_km;
        this.szakasz_km = szakasz_km;

        this.szerviz();
    }

    
    tankol(tankolnek){  // Itt nem tudom kaphat-e osztálymetódus osztályon kívülről paramétert (hívható-e paraméterrel)

        let siker = false;
        let elfogyott = (this.szakasz_km * this.fogyaszt) / 100;

        tankolnek <= (this.tank - elfogyott) ? siker = true : siker = false;

        return siker;                
    }


    szerviz(){
        if (this.ossz_km > 10000) {
            alert("Szervizbe kéne menni!");            
        }         
    }


    szaguld(utazas_km){

        let utazas_fuel = (utazas_km * this.fogyaszt) / 100;
        let tankban_van = this.tank - ((this.szakasz_km * this.fogyaszt) / 100);

        if (utazas_fuel > tankban_van) {
            alert("Nincs elég üzemanyagod! Tankolj.");            
        }

        else if(this.ossz_km > 10000){
            alert("Ne utazz te sehova. Menj szervízbe!");
        }

        else{
            tankban_van = tankban_van - utazas_fuel;
            alert("Sikeres az utazás");
        }

        return tankban_van;
    }
}