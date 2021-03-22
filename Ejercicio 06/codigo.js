//Vector de letras
var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

//Variables, solicitamos input del usuario
const valorDivisionDNI = 23;
let numeroDNI = prompt('Introduce tu número de DNI:');
let letraDNI = prompt('Introduce la letra de tu DNI:');
let letraBuscada;

//Control de errores sobre el número del DNI
if (numeroDNI < 0 || numeroDNI > 99999999)
    alert('El número introducido no es válido!');
    //Si el número es válido procedemos a comprobar si la correspondencia entre número y letra es correcta
else {
    letraBuscada = letras[numeroDNI % valorDivisionDNI];
    if (letraBuscada == letraDNI)
        alert('DNI correcto!');
    else
        alert('El DNI introducido no es válido. La letra indicada no es correcta!');
}