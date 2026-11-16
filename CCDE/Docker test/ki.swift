import Foundation

var highscoreList: [Int] = []

func add(a: Int, b: Int) -> Int {
    return a + b
}

func sub(a: Int, b: Int) -> Int {
    return a - b
}

func mul(a: Int, b: Int) -> Int {
    return a * b
}

func randomNumber(min: Int, max: Int) -> Int {
    return Int.random(in: min...max)
}

func randomOperation() -> Int {
    return Int.random(in: 1...3)
}

func showHighscores() {
    print("\n--- Highscores ---")
    if highscoreList.isEmpty {
        print("Noch keine Highscores vorhanden.")
    } else {

        let sortedScores = highscoreList.sorted(by: >)
        for (index, score) in sortedScores.enumerated() {
            print("\(index + 1). Platz: \(score) Punkte")
        }
    }
    print("------------------\n")
}

func startGame() {
    var score = 0
    let timeLimit: Double = 30.0
    let startTime = Date()

    print("\nDas Spiel startet! Du hast \(Int(timeLimit)) Sekunden Zeit.")

    while Date().timeIntervalSince(startTime) < timeLimit {
        let remaining = Int(timeLimit - Date().timeIntervalSince(startTime))
        print("\n[Verbleibende Zeit: \(remaining)s | Punkte: \(score)]")

        let operation = randomOperation()
        var a: Int
        var b: Int
        var correctAnswer: Int
        var symbol: String

        switch operation {
        case 1:
            a = randomNumber(min: 1, max: 100)
            b = randomNumber(min: 1, max: 100)
            correctAnswer = add(a: a, b: b)
            symbol = "+"
        case 2:
            a = randomNumber(min: 1, max: 100)
            b = randomNumber(min: 1, max: 100)
            if a < b { swap(&a, &b) }
            correctAnswer = sub(a: a, b: b)
            symbol = "-"
        case 3:
            a = randomNumber(min: 1, max: 10)
            b = randomNumber(min: 1, max: 10)
            correctAnswer = mul(a: a, b: b)
            symbol = "*"
        default:
            continue
        }

        print("Was ist \(a) \(symbol) \(b)?")
        print("Deine Antwort: ", terminator: "")

        guard let inputLine = readLine(), let playerAnswer = Int(inputLine) else {
            print("Ungültige Eingabe! Bitte eine Zahl eingeben.")
            continue
        }

        // Prüfen, ob während der Eingabe die Zeit abgelaufen ist
        if Date().timeIntervalSince(startTime) >= timeLimit {
            print("Zeit abgelaufen!")
            break
        }

        if playerAnswer == correctAnswer {
            print("Richtig! (+1 Punkt)")
            score += 1
        } else {
            print("Falsch! Die richtige Antwort war \(correctAnswer).")
        }
    }

    print("\nRunde vorbei! Du hast insgesamt \(score) Punkt(e) erreicht.")
    highscoreList.append(score)
}


func main() {
    var isRunning = true

    while isRunning {
        print("Menü: [1] Spiel starten | [2] Highscores ansehen | [3] Beenden")
        print("Auswahl: ", terminator: "")

        let choice = readLine()
        switch choice {
        case "1":
            startGame()
        case "2":
            showHighscores()
        case "3":
            print("Auf Wiedersehen!")
            isRunning = false
        default:
            print("Ungültige Eingabe. Bitte wähle 1, 2 oder 3.\n")
        }
    }
}


main()