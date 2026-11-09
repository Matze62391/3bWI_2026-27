
export class Prozessor {
    private _takt: number;
    private _kerne: number;
    private _hersteller: string;
    constructor(takt: number, kerne: number, hersteller: string) {
        this._takt = takt;
        this._kerne = kerne;
        this._hersteller = hersteller;
    }

    get takt(): number {
        return this._takt;
    }

    get kerne(): number {
        return this._kerne;
    }
    
    get hersteller(): string {
        return this._hersteller;
    }

    printdata() {
        console.log(`Prozessor:`);
        console.log(`Takt: ${this._takt} GHz`);
        console.log(`Kerne: ${this._kerne}`);
        console.log(`Hersteller: ${this._hersteller}`);
    }
}