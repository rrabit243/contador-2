let contador = 20
let contador2 = 0
basic.forever(function () {
    if (contador >= contador2) {
        basic.pause(500)
        contador += -1
        basic.showNumber(contador)
    }
})
