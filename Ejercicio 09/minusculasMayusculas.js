//Comprobamos si la cadena tiene caractéres en minúsculas, mayúsculas, de ambos tipos o números
let cadena = prompt('Introduce una cadena de texto:');

let mayusc = false;
let minusc = false;
let contieneNumeros = false;

let letra;
for (let i = 0; i <= cadena.length; i++){
    letra = cadena.charAt(i);
    if (!isNaN(letra * 1)) {     //Valor numérico
        contieneNumeros = true;
    }
    else {
        if (letra == letra.toUpperCase())
            mayusc = true;
        if (letra == letra.toLowerCase())
            minusc = true;
    }
}

//Salida por pantalla
if (mayusc && minusc)
    alert('La cadena tiene una combinación de minúsculas y mayúsculas');
else if (mayusc)
    alert('La cadena está compuesta solo por mayúsculas!');
else if (minusc)
    alert('La cadena está compuesta solo por minúsculas!');
else if (contieneNumeros)
    alert('Esta es una cadena numérica');