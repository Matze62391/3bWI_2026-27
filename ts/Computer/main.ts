 //Implementiere eine Methode zur Gesamtleistungs-/Speicherberechnung. 

import { Computer } from "./Computer/computer.ts";
import { Prozessor } from "./Prozessor/prozessor.ts";
import { Festplatte } from "./Festplatte/festplatte.ts";

const prozessor = new Prozessor(3.5, 8, "AMD");
const festplatte = new Festplatte(1000, "SSD", 3500);
const computer = new Computer("Gaming-PC", 16, 1200, prozessor, festplatte);

const prozessor2 = new Prozessor(4.0, 6, "Intel");
const festplatte2 = new Festplatte(2000, "HDD", 150);
const computer2 = new Computer("Office-PC", 8, 800, prozessor2, festplatte2);

console.log('Computer 1:');
computer.printdata();

console.log(`Gesamtleistung: ${computer.gesamtleistung()} GHz`);
console.log(`Gesamtspeicher: ${computer.gesamtspeicher()} GB`);
console.log('Computer 2:');
computer2.printdata();
console.log(`Gesamtleistung: ${computer2.gesamtleistung()} GHz`);
console.log(`Gesamtspeicher: ${computer2.gesamtspeicher()} GB`);