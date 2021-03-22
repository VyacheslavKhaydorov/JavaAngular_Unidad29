//Dadas dos variables, hacemos comprobaciones y damos salida por consola en función de si estas se cumplen o no
var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
    console.log('numero1 (' + numero1 + ') no es mayor que numero2 (' + numero2 + ')');
}

if (numero2 > 0) {
    console.log('numero2 (' + numero2 + ') es positivo');
}

if (numero1 != 0) {
    console.log('numero1 (' + numero1 + ') es negativo o distinto de cero');
}

if ((numero1 + 1) < numero2) {
    console.log('Incrementar en 1 unidad el numero1 (' + numero1 + ') no lo hace mayor o igual que el numero2 (' + numero2 + ')');
}