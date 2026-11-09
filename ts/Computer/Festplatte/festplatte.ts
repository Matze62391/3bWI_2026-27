
export class Festplatte {
    private _kapazitaet: number
    private _typ: string
    private _geschwindigkeit: number
    constructor(kapazität: number, typ: string, geschwindigkeit: number) {
        this._kapazitaet = kapazität;
        this._typ = typ;
        this._geschwindigkeit = geschwindigkeit;
    }
    
    get typ(): string {
        return this._typ;
    }

    get geschwindigkeit(): number {
        return this._geschwindigkeit;
    }

    get kapazitaet(): number {
        return this._kapazitaet;
    }

    printdata() {
        console.log(`Festplatte:`);
        console.log(`Kapazität: ${this._kapazitaet} GB`);
        console.log(`Typ: ${this._typ}`);
        console.log(`Geschwindigkeit: ${this._geschwindigkeit} MB/s`);
    }
}