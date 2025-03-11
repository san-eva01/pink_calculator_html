function appendValue(value) {
    //pone el valor en el display, y lo suma al valor existente
    document.getElementById("display").value += value;
    printDisplay();
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        //toma la cadena escrita en el display y la 'evalua'
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
