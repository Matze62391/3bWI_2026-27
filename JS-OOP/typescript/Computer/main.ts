 //Implementiere eine Methode zur Gesamtleistungs-/Speicherberechnung. 
import { Computer } from "./Computer/computer.ts";

const computer = Computer.random();

console.log(`Gesamtleistung: ${computer.gesamtleistung()} GHz`);
console.log(`Gesamtspeicher: ${computer.gesamtspeicher()} GB`);

const computerListe: Computer[] = [];

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
    computerListe.push(Computer.random());
}

computerAnzeigen();


const amdComputer = computerListe.filter(c => c.ProcessorHersteller("AMD"));
console.log(`\nComputer mit AMD-Prozessor (${amdComputer.length}):`);
amdComputer.forEach(c => c.printdata());5

const AmountComputers = computerListe.length;
console.log(`\nIm Betrieb sind: ${AmountComputers} Computer`);

