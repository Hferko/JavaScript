'use strict';

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


class Cica {

    constructor(nev, suly, ehes = true){

        this.nev = nev;
        this.suly = suly;
        this.ehes = ehes;
    }

    eszik(mennyit_eszik){  // Vajon kaphat-e osztálymetódus osztályon kívülről paramétert (hívható-e paraméterrel)
         
        let siker = false;
        
        if ( parseFloat(mennyit_eszik) ){         

        this.ehes ? siker = true : siker = false;

        siker ? this.suly += mennyit_eszik : this.suly = this.suly;

        siker ? this.ehes = false : this.ehes = true;
        }

        return siker;
    }

    futkos(){
        this.suly -= (this.suly * 0.1);        
        this.ehes = true;
    }
}