//3 Grundrechnungsarten (+,-,*),
//Timer, Highscore, Mal im 1x1 beschränken, Array der Highscore liste speichert.

import Foundation // für Date() (Timer)

var highscoreListe: [Int] = []
let anzahlFragen = 5
let zeitLimit = 10.0 // Sekunden pro Frage

func add(a: Int, b: Int) -> Int {
    return a + b
}

func sub(a: Int, b: Int) -> Int {
    return a - b
}

func mul(a: Int, b: Int) -> Int {
    return a * b
}

func randomNumber() -> Int {
    return Int.random(in: 1..<100)
}
// Für Mal: nur das kleine 1x1
func randomNumber1x1() -> Int {
    return Int.random(in: 1...10)
}
func randomfunction() -> Int {
    return Int.random(in: 1..<4)
}

func zeigeHighscore() {
    if highscoreListe.isEmpty {
        print("Noch kein Highscore.")
    } else {
        print("Highscore: \(highscoreListe.max()!)")
        print("Alle Ergebnisse: \(highscoreListe)")
    }
}

func leseZahl() -> Int? {
    print("Geben Sie die Lösung ein: ")
    if let name = readLine(), let number = Int(name) {
        return number
    } else {
        print("Ungültige Eingabe. Bitte geben Sie eine Zahl ein.")
        return nil
    }
}

func checkAnswer(input: Int, a: Int, b: Int, operation: Int) -> Bool {
    switch operation {
    case 1:
        return input == add(a: a, b: b)
    case 2:
        return input == sub(a: a, b: b)
    case 3:
        return input == mul(a: a, b: b)
    default:
        return false
    }
}

func startGame() {
    var value = 0
    let spielStart = Date()
    print("Du hast \(Int(zeitLimit)) Sekunden pro Frage.")
    for _ in 1...anzahlFragen {
        let operation = randomfunction()
        var a = randomNumber()
        var b = randomNumber()
        let correctAnswer: Int
        switch operation {
        case 1:
            correctAnswer = add(a: a, b: b)
            print("Was ist \(a) + \(b)?")
        case 2:
            correctAnswer = sub(a: a, b: b)
            print("Was ist \(a) - \(b)?")
        case 3:
            a = randomNumber1x1()
            b = randomNumber1x1()
            correctAnswer = mul(a: a, b: b)
            print("Was ist \(a) * \(b)?")
        default:
            return
        }

        let frageStart = Date()
        let input = leseZahl()
        let dauer = Date().timeIntervalSince(frageStart)
        print("Zeit: \(String(format: "%.1f", dauer)) Sekunden")

        if dauer > zeitLimit {
            print("Zu langsam! Die richtige Antwort ist \(correctAnswer).")
        } else if let input = input, checkAnswer(input: input, a: a, b: b, operation: operation) {
            print("Richtig!")
            value += 1
        } else {
            print("Falsch! Die richtige Antwort ist \(correctAnswer).")
        }
    }
    let gesamtZeit = Date().timeIntervalSince(spielStart)
    print("Du hast \(value) von \(anzahlFragen) richtig.")
    print("Gesamtzeit: \(String(format: "%.1f", gesamtZeit)) Sekunden")
    highscoreListe.append(value)
}


func main() {
    var laeuft = true
    while laeuft {
        print("Hallo, 1 Spiel, 2 Highscore, 3 Ende")
        let choice = readLine()
        switch choice {
            case "1":
                startGame()
            case "2":
                zeigeHighscore()
            case "3", nil:
                print("Spiel beendet.")
                laeuft = false
            default:
                print("Ungültige Eingabe.")
        }
    }
}

main()
