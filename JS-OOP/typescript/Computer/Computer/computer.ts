import { Prozessor } from "../Prozessor/prozessor.ts";
import { Festplatte } from "../Festplatte/festplatte.ts";

export class Computer {
    
    private _modell: string;
    private _ram: number;
    private _preis: number;
    private _prozessor: Prozessor;
    private _festplattenliste: Festplatte[];

    constructor(modell: string, ram: number, preis: number, prozessor: Prozessor, festplattenliste: Festplatte[]) {
        this._modell = modell;
        this._ram = ram;
        this._preis = preis;
        this._prozessor = prozessor;
        this._festplattenliste = festplattenliste;
    }

    get prozessor(): Prozessor {
        return this._prozessor;
    }

    get festplattenliste(): Festplatte[] {
        return this._festplattenliste;
    }

    get preis(): number {
        return this._preis;
    }

    printdata() {
        console.log(`Modell: ${this._modell}`);
        console.log(`RAM: ${this._ram} GB`);
        console.log(`Preis: ${this._preis} €`);
        this._prozessor.printdata();
        this._festplattenliste.forEach(festplatte => festplatte.printdata());
    }

    gesamtleistung(): number {
        return this._prozessor.takt * this._prozessor.kerne;
    }

    gesamtspeicher(): number {
        return this._festplattenliste.reduce((sum, festplatte) => sum + festplatte.kapazitaet, 0);
    }

    ProcessorHersteller(hersteller: string): boolean {
        return this._prozessor.hersteller === hersteller;
    }
    

}


function deleteComputerListe() {
    return computerListe.filter(c => c.preis < 3000);
}

//foreach
function deleteComputerListeForEach() {
    const filteredList: Computer[] = [];
    computerListe.forEach(computer => {
        if (computer.preis < 3000) {
            filteredList.push(computer);
        }   
    });
    return filteredList;
}

//for loop
function deleteComputerListeForLoop() {
    const filteredList: Computer[] = [];
    for (let i = 0; i < computerListe.length; i++) {
        if (computerListe[i].preis < 3000) {
            filteredList.push(computerListe[i]);
        }
    }
    return filteredList;
}

//while loop
function deleteComputerListeWhileLoop() {
    const filteredList: Computer[] = [];
    let i = 0;
    while (i < computerListe.length) {
        if (computerListe[i].preis < 3000) {
            filteredList.push(computerListe[i]);
        }
        i++;
    }
    return filteredList;
}