def positiv(zahlen):
    positiv=0
    for zahl in zahlen:
        if zahl>=0:
            positiv+=1
    return positiv

liste = [5, -2, 10, 0, 7, -1]

ergebnis = positiv(liste)

print(ergebnis)