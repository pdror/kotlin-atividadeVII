import kotlin.browser.document

fun main() {
    handleCoordinates()
    handleButtonEvent()
}

fun handleCoordinates() {
    val xCoord = document.getElementById("x-coord")
    val yCoord = document.getElementById("y-coord")

    val body = document.getElementById("body")

    body!!.addEventListener("click", {
        xCoord!!.innerHTML = "Coordenada x: " + js("window.xCoordinate")
        yCoord!!.innerHTML = "Coordenada x: " + js("window.yCoordinate")
    })
}

fun handleButtonEvent() {
    val botao01 = document.getElementById("botao01")
    val textfield = document.getElementById("textfield")

    botao01!!.addEventListener("click", {
        textfield!!.textContent = botao01.textContent
    })
}