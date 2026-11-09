export class Auto {
    private _marke: string = "";
    private _ps: number = 0;
    private _farbe: string = "";

    constructor(marke: string, ps: number, farbe: string) {
        this._marke = marke;
        this._ps = ps;
        this._farbe = farbe;
    }

    printdata() {
        console.log("Auto data Farbe: " + this._farbe + " Marke: " + this._marke + " PS: " + this._ps);
    }


}

