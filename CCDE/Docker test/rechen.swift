//3 Grundrechnungsarten (+,-,*),
//Timer, Highscore, Mal im 1x1 beschränken, Array der Highscore liste speichert.

var a: Int = randomNumber()
var b: Int = randomNumber()
var Highscore: [Int] = []
var input: Int = 0
print("Geben Sie die Lösung ein: ")
if let name = readLine(), let number = Int(name) {
    input = number
} else {
    print("Ungültige Eingabe. Bitte geben Sie eine Zahl ein.")
}

func add(a: Int, b: Int) -> Int {
    return a + b
}

func sub(a: Int, b: Int) -> Int {
    return a - b
}

func mul(a: Int, b: Int) -> Int {
    return a * b
}

static func randomNumber() -> Int {
    return Int.random(in: 1..<100)
}
static func randomfunction() -> Int {
    return Int.random(in: 1..<4)
}

func Highscore() {
    print("Highscore: \(Highscore)")
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
    let value = 0
    let operation = randomfunction()
    var correctAnswer: Int
    switch operation {
    case 1:
        correctAnswer = add(a: a, b: b)
        print("Was ist \(a) + \(b)?")
    case 2:
        correctAnswer = sub(a: a, b: b)
        print("Was ist \(a) - \(b)?")
    case 3:
        correctAnswer = mul(a: a, b: b)
        print("Was ist \(a) * \(b)?")
    default:
        return
    }
    
    if checkAnswer(input: input, a: a, b: b, operation: operation) {
        print("Richtig!")
        value += 1
        Highscore.append(1)
    } else {
        print("Falsch! Die richtige Antwort ist \(correctAnswer).")
    }
}


func main() {
    print("Hallo, 1 Spiel, 2 Highscore, 3 Ende")
    let choice = readLine()
    switch choice {
        case "1":
            startGame()
        case "2":
            Highscore()
        case "3":
            print("Spiel beendet.")
        default:
            print("Ungültige Eingabe.")
    }
    startGame()
    Highscore()
}
