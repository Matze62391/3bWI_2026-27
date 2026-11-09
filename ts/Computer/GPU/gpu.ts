export class GPU {
    private _modell: string;
    private _speicher: number;
    private _hersteller: string;
    private _takt: number;
    private _kerne: number;


    constructor(modell: string, speicher: number, hersteller: string, takt: number, kerne: number) {
        this._modell = modell;
        this._speicher = speicher;
        this._hersteller = hersteller;
        this._takt = takt;
        this._kerne = kerne;
    }

    get modell(): string {
        return this._modell;
    }

    get speicher(): number {
        return this._speicher;
    }

    get hersteller(): string {
        return this._hersteller;
    }

    get takt(): number {
        return this._takt;
    }

    get kerne(): number {
        return this._kerne;
    }

    printdata() {
        console.log(`GPU:`);
        console.log(`Modell: ${this._modell}`);
        console.log(`Speicher: ${this._speicher} GB`);
        console.log(`Hersteller: ${this._hersteller}`);
        console.log(`Takt: ${this._takt} GHz`);
        console.log(`Kerne: ${this._kerne}`);
    }
}