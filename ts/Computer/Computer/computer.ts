
import { Prozessor } from "../Prozessor/prozessor.ts";
import { Festplatte } from "../Festplatte/festplatte.ts";
export class Computer {
    
    private _modell: string;
    private _ram: number;
    private _preis: number;
    private _prozessor: Prozessor;
    private _festplatte: Festplatte;

    constructor(modell: string, ram: number, preis: number, prozessor: Prozessor, festplatte: Festplatte) {
        this._modell = modell;
        this._ram = ram;
        this._preis = preis;
        this._prozessor = prozessor;
        this._festplatte = festplatte;
    }

    printdata() {
        console.log(`Modell: ${this._modell}`);
        console.log(`RAM: ${this._ram} GB`);
        console.log(`Preis: ${this._preis} €`);
        this._prozessor.printdata();
        this._festplatte.printdata();
    }

    gesamtleistung(): number {
        return this._prozessor.takt * this._prozessor.kerne;
    }

    gesamtspeicher(): number {
        return this._ram + this._festplatte.kapazitaet;
    }
}