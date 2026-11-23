 //Implementiere eine Methode zur Gesamtleistungs-/Speicherberechnung. 
import { Computer } from "./Computer/computer.ts";
import { Festplatte } from "./Festplatte/festplatte.ts";
import { Prozessor } from "./Prozessor/prozessor.ts";

const computer = random();

console.log(`Gesamtleistung: ${computer.gesamtleistung()} GHz`);
console.log(`Gesamtspeicher: ${computer.gesamtspeicher()} GB`);

const computerListe: Computer[] = [];

function random(): Computer {
    return new Computer(
        ["Gaming-PC", "Büro-PC", "Workstation", "Server", "Mini-PC", "Laptop"][Math.floor(Math.random() * 6)],
        Math.floor(Math.random() * 32) + 4,
        Math.floor(Math.random() * 3000) + 500,
        Prozessor.random(),
        [Festplatte.random()]
    );
}

function computerAnzeigen(): void {
    if (computerListe.length === 0) {
        console.log("Keine Computer in der Liste.");
        return;
    }
    computerListe.forEach((computer, index) => {
        console.log(`\nComputer ${index + 1}:`);
        computer.printdata();
    });
}

for (let i = 0; i < 10; i++) {
    computerListe.push(random());
}

computerAnzeigen();


const amdComputer = computerListe.filter(c => c.ProcessorHersteller("AMD"));
console.log(`\nComputer mit AMD-Prozessor (${amdComputer.length}):`);
amdComputer.forEach(c => c.printdata());

const AmountComputers = computerListe.length;
console.log(`\nIm Betrieb sind: ${AmountComputers} Computer`);
