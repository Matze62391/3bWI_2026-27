import { Auto } from "../auto/auto.ts";

export class Parkplatz {
    private _anzahlPlaetze: number;
    private _name: string;
    private _ort: string;
    private _straße: string;
    private _plz: string;
    private _kosten: number; //€ /Stunde
    private _autos: Auto[] = [];

    constructor(anzahlPlatze: number, name: string, ort: string, straße: string, plz: string, kosten: number) {
        this._anzahlPlaetze = anzahlPlatze;
        this._name = name;
        this._ort = ort;
        this._straße = straße;
        this._plz = plz;
        this._kosten = kosten;
        this._autos = [];
    }

    printdata() {
        console.log("Parkplatz data Name: " + this._name + " Ort: " + this._ort + " Straße: " + this._straße + " PLZ: " + this._plz + " Kosten: " + this._kosten + " Anzahl Plätze: " + this._anzahlPlaetze);
    }
    addAuto(auto: Auto) {
        if (this._autos.length < this._anzahlPlaetze) {
            this._autos.push(auto);
        } else {
            console.log("Parkplatz ist voll. Auto konnte nicht hinzugefügt werden.");
        }
    }
    removeAuto(auto: Auto) {
        const index = this._autos.indexOf(auto);
        if (index !== -1) {
            this._autos.splice(index, 1);
        } else {
            console.log("Auto ist nicht auf dem Parkplatz.");
        }
    }
    autoAufParkplatz(auto: Auto) {
        this._autos.forEach((auto) => {
            auto.printdata();
        });
    }
}