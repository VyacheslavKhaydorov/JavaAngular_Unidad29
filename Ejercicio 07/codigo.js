//Variables
let valorEntero = prompt('Introduce un valor entero');
let factorial = 1;

//Calculamos el factorial
for (let i = parseInt(valorEntero); i != 0; i--)
    factorial *= i;
alert('El factorial de ' + valorEntero + ' es ' + factorial);