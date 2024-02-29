// Ejecuta "npm install" si no lo has hecho antes
/**
 * Tienes que crear una aplicación de banco.
 * El usuario tendrá una cantidad inicial de 100 euros.
 * El programa tendrá un menú que se dibujará y mostrará las siguientes opciones:
 *  1. Extraer dinero:  El programa pedirá al usuario una cantidad de dinero a extraer.
 *                      La cantidad a extraer no puede ser superior a la cantidad que tenga el usuario.
 *                      La cantidad será restada del saldo del usuario.
 *  2. Ingresar dinero: El programa pedirá al usuario una cantidad de dinero a ingresar.
 *                      Esta cantidad se sumará al saldo del usuario.
 *  3. Ver movimientos: Mostrará una lista de los movimientos realizados por el usuario.
 *  4. Salir:           Finalizará la ejecución de la aplicación.
 * 
 * Para pedir una entrada al usuario se usará la función `prompt("Mensaje a enseñar")`
 */

const prompt = require('prompt-sync')({ sigint: true });

// Esta función dibuja el menú
function menu() {
    console.log('Menu ATM');
    console.log('1. Extraer dinero.');
    console.log('2. Ingresar dinero');
    console.log('3. Ver movimientos');
    console.log('4. Cancelar operación');

    return prompt('¿Qué opción quiere usar?');
}

// Empieza el ejercicio debajo
menu();
let saldo = 100;
let extrarerMovimientos = [];
let ingresarMovimientos = [];



do {
    if (prompt() == 1) {
        let retirar = parseFloat(prompt("Cuanto dinero quieres retirar"));
        Retirar(retirar);
        menu();
    } else if (prompt() == 2) {
        let ingresar = parseFloat(prompt("Cuanto dinero quieres ingresar"));
        Ingresar(ingresar);
        menu();
    } else if (prompt() == 3) {
        MostrarMovimientos();
        menu();
    } else if(prompt() == 4) {
        console.log('Porfavor reitre la tarjeta');
        console.log('Saliendo...');
    } else{
        console.log('Por favor pulse una opción válida');
        menu();
    }
} while (prompt()!=4);


function Retirar(dinero) {
    if (dinero > saldo) {
        console.log('No dispones de saldo en al cuenta.');
    } else if (dinero <= 0) {
        console.log('La cantidad tiene que ser mayor que 0');
    } else {
        saldo -= dinero;
        console.log('Operación realizada con éxito');
        console.log('Saldo disponble ' + saldo);
        extrarerMovimientos.push(dinero);
    }
 
}

function Ingresar(dinero) {
    if (dinero <= 0) {
        console.log('La cantidad tiene que ser mayor que 0')
    } else {
        saldo += dinero;
        console.log('Operación realizada con éxito');
        console.log('Saldo disponble ' + saldo);
        ingresarMovimientos.push(dinero);
    }
}

function MostrarMovimientos() {
    console.log('Has realizado las siguentes transaciónes:');
    console.log('Movimientos de ingreso:' + ingresarMovimientos+'€');
    console.log('Movimientos de retirada:' + extrarerMovimientos+'€');
}

