//Capturamos un número y comprobamos si es par o impar
let numero = prompt('Introduce un valor entero:');

if (Number(numero) == 0)
    alert('El valor introducido es cero!');
else if (Number(numero) % 2 == 0)
    alert('El valor introducido es par');
else if (Number(numero) % 2 == 1)
    alert('El valor introducido es impar');
else
    alert('El valor introducido no es entero :-(');