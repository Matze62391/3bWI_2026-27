
export class Festplatte {
    private _kapazitaet: number
    private _typ: string
    private _geschwindigkeit: number
    private static festplattentypen = ["SSD", "HDD", "NVMe"]
    
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
    
    static random(): Festplatte {
        return new Festplatte(
            Math.floor(Math.random() * 2000) + 256,
            this.festplattentypen[Math.floor(Math.random() * this.festplattentypen.length)],
            Math.floor(Math.random() * 4000) + 100
        );
    }
}