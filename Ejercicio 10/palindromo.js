//¿Es la cadena de texto un palíndromo?
let cadena = prompt('Introduce una palabra o frase:');

//Pasamos la cadena caracter por caracter a dos vectores, a uno en orden invertido, y los comparamos
let cadenaDelDerecho = [];
let cadenaDelReves = [];

for (let i = 0; i < cadena.length; i++) {
    cadenaDelDerecho[i] = cadena[i].toLowerCase;    //Necesario para que las mayúsculas no molesten 
}

for (let i = cadenaDelDerecho.length; i >= 0; i--) {
    cadenaDelReves[cadenaDelDerecho.length - i] = cadenaDelDerecho[i];
}

if (cadenaDelDerecho.join('') == cadenaDelReves.join(''))   //Juntamos los vectores de caracteres en cadenas y los comparamos
    alert('Esto es un palíndromo!');
else
    alert('Esto NO es un palíndromo');
    