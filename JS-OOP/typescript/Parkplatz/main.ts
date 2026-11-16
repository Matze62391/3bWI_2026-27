import { Auto } from "./auto/auto.ts";
import { Parkplatz } from "./parkplatz/parkplatz.ts";


const autos: Auto[] = [];
const auto = new Auto("BMW", 150, "rot");
const parkplatz = new Parkplatz(40, "HTL Dornbirn für Lehrer", "Dornbirn", "Höchsterstraße 45", "6850", 0.3);

const farbenA = ["rot", "blau", "grün", "gelb", "schwarz", "weiß"];
const markenA = ["BMW", "Audi", "Mercedes", "VW", "Opel", "Ford"];
const psA = [100, 150, 200, 250, 300, 350];

auto.printdata();
for(let i=0;i<10;i++){
    const auto = new Auto(
        markenA[Math.floor(Math.random() * markenA.length)],
        psA[Math.floor(Math.random() * psA.length)],
        farbenA[Math.floor(Math.random() * farbenA.length)]
    );
    autos.push(auto);
}

autos.forEach((auto) => {
    parkplatz.addAuto(auto);
    auto.printdata();
});

parkplatz.printdata();
parkplatz.autoAufParkplatz(auto);
parkplatz.removeAuto(autos[0]);
parkplatz.autoAufParkplatz(auto);