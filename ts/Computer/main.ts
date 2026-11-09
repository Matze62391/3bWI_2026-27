 //Implementiere eine Methode zur Gesamtleistungs-/Speicherberechnung. 

import { Computer } from "./Computer/computer.ts";
import { Prozessor } from "./Prozessor/prozessor.ts";
import { Festplatte } from "./Festplatte/festplatte.ts";

const prozessor = new Prozessor(3.5, 8, "AMD");
const festplatte = new Festplatte(1000, "SSD", 3500);
const computer = new Computer("Gaming-PC", 16, 1200, prozessor, festplatte);

console.log('Computer 1:');
computer.printdata();

console.log(`Gesamtleistung: ${computer.gesamtleistung()} GHz`);
console.log(`Gesamtspeicher: ${computer.gesamtspeicher()} GB`);