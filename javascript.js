x = ""
function one() {
    x += "1"
    document.getElementById("numbers").innerHTML = x
}
function two() {
    x += "2"
    document.getElementById("numbers").innerHTML = x
}
function three() {
    x += "3"
    document.getElementById("numbers").innerHTML = x
}
function four() {
    x += "4"
    document.getElementById("numbers").innerHTML = x
}
function five() {
    x += "5"
    document.getElementById("numbers").innerHTML = x
}
function six() {
    x += "6"
    document.getElementById("numbers").innerHTML = x
}
function seven() {
    x += "7"
    document.getElementById("numbers").innerHTML = x
}
function eight() {
    x += "8"
    document.getElementById("numbers").innerHTML = x
}
function nine() {
    x += "9"
    document.getElementById("numbers").innerHTML = x
}
function zero() {
    x += "0"
    document.getElementById("numbers").innerHTML = x
}
function plus () {
    x += " + "
    document.getElementById("numbers").innerHTML = x
}
function equal () {
    let [w, z] = x.split(" + ") 
    let numw = parseInt(w)
    let numz = parseInt(z)
    x = numz + numw
    document.getElementById("numbers").innerHTML = x
}
function reset() {
    x = ""
    document.getElementById("numbers").innerHTML = x
} 