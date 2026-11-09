
function randomName() {
    let names = ["Minka", "Mimi", "Mia", "Luna", "Nala", "Lilly", "Lucy", "Molly", "Sophie", "Chloe"]
    let randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
}

function randomAlter() {
    return Math.floor(Math.random() * 15) + 1
}

function movingPosition_x() {
    let position_x = Math.floor(Math.random() * 100) + 1
    return position_x
}

function movingPosition_y() {
    let position_y = Math.floor(Math.random() * 100) + 1
    return position_y
}

class Katze {
    constructor(name, alter, bildDatei, y) {
        this.name = name
        this.alter = alter
        this.x = Math.random() * 80      // Position in % von links
        this.y = y                        // Position in px von oben
        this.richtung = 1                 // 1 = nach rechts, -1 = nach links
        this.geschwindigkeit = 0.2 + Math.random() * 0.5

        // Bild erstellen und auf die Seite setzen
        this.bild = document.createElement("img")
        this.bild.src = bildDatei
        this.bild.alt = name
        this.bild.className = "katze"
        document.body.appendChild(this.bild)
        this.zeichnen()
    }

    zeichnen() {
        this.bild.style.left = this.x + "%"
        this.bild.style.top = this.y + "px"
    }

    bewegen() {
        this.x = this.x + this.geschwindigkeit * this.richtung
        if (this.x > 80 || this.x < 0) {
            this.richtung = this.richtung * -1   // umdrehen
        }
        this.zeichnen()
    }
}

let katzen = [
    new Katze(randomName(), randomAlter(), "images/katze1.png", 0),
    new Katze(randomName(), randomAlter(), "images/katze2.png", 200),
    new Katze(randomName(), randomAlter(), "images/katze3.png", 400)
]

function animate() {
    for (let i = 0; i < katzen.length; i++) {
        katzen[i].bewegen()
    }
    requestAnimationFrame(animate)   // ca. 60 Mal pro Sekunde
}
animate()

