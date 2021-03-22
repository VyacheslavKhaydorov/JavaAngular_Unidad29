//Tenemos un vector con variables de diversa tipología
var valores = [true, 5, false, 'hola', 'adios', 2];

//Comprobamos qué elemento de tipo cadena es más largo
let indice;
let longitudCadena = 0;
let cadenaMasLarga;
valores.forEach(function(value, index) {
    if (typeof value === 'string' && value.length > longitudCadena) {
        indice = index;
        longitudCadena = value.length;
        cadenaMasLarga = value;
    }
})
document.write('La cadena más larga del vector es \"' + cadenaMasLarga + '\"');

//Booleanos
//TODO

//Realizamos cinco operaciones matemáticas con los elementos numéricos
let valorNumerico1;
let valorNumerico2;
valores.forEach(function(value) {
    if (typeof value === 'number' && valorNumerico1 == undefined)
        valorNumerico1 = value;
    else if (typeof value === 'number' && valorNumerico1 != undefined) {
        valorNumerico2 = value;
    }
})
document.write('<br>' + valorNumerico1 + ' + ' + valorNumerico2 + ' = ' + (valorNumerico1 + valorNumerico2));
document.write('<br>' + valorNumerico1 + ' - ' + valorNumerico2 + ' = ' + (valorNumerico1 - valorNumerico2));
document.write('<br>' + valorNumerico1 + ' * ' + valorNumerico2 + ' = ' + (valorNumerico1 * valorNumerico2));
document.write('<br>' + valorNumerico1 + ' / ' + valorNumerico2 + ' = ' + (valorNumerico1 / valorNumerico2));
document.write('<br>' + valorNumerico1 + ' % ' + valorNumerico2 + ' = ' + (valorNumerico1 % valorNumerico2));
