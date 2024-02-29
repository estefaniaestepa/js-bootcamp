//EJERCICIO FORMULARIO
//1. HEMOS CREADO UN FORMULARIO EN HTML
//CREAR NUESTRO ARCHIVO JS
//QUEREMOS QUE EN NUESTRO FORMULARIO CUANDO CARGUE LA PAGINA NOS APAREZCA LAS CONDICIONES DE LA CONSTRASEÑA
//CUANDO VAYAMOS ESCRIBIENDO CADA UNA DE LAS CONDICIONES QUE TIENEN UNA X, NOS LO CAMBIE POR UN SIMBOLO DE VALIDACIÓN Y VALIDE EL STRING QUE TENEMOS EN EL INPUT
/* LA CONTRASEÑA TIENE QUE CUMPLIR ESTOS REQUISITOS:
1.NUMERO
2.LETRA
3.@ */


const passwordInput = document.querySelector('#password');
const passwordRequirements = document.querySelector('#passwordRequirements');
const charRequirementSpan = document.querySelector('#charRequirement');
const numberRequirementSpan = document.querySelector('#numberRequirement');
const specialCharacterRequirementSpan = document.querySelector('#specialCharacterRequirement');

passwordInput.addEventListener('focus', () => {
    passwordRequirements.classList.remove('hidden');
});

passwordInput.addEventListener('blur', () => {
    passwordRequirements.classList.add('hidden');
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;            //nos crea una variable password que es el valor que está dentro del asswordInput

    // Verificar si la contraseña contiene al menos 1 letra
    charRequirementSpan.textContent = password.match(/[a-zA-Z]/) ? '✔' : '✘';                     //verifica si tiene al menos una letra con el password.match y comprueba si existe  (/[a-zA-Z]/) ? '✔' en el campo  charRequirementSpan si no lo está nos devuelve una x
    charRequirementSpan.className = password.match(/[a-zA-Z]/) ? 'green' : 'red';                 // si es ok lo pone en verde si no en rojo

    // Verificar si la contraseña contiene al menos 1 número
    numberRequirementSpan.textContent = password.match(/\d/) ? '✔' : '✘';                       //verifica los números . (/\d/) -esto es el conjunto de los numeros de 0 a 9 - ESTO ES REJEX , es una serie de herramientas de validación de textos. 
    numberRequirementSpan.className = password.match(/\d/) ? 'green' : 'red';                   //idem

    // Verificar si la contraseña contiene al menos 1 arroba (@)
    specialCharacterRequirementSpan.textContent = password.includes('@') ? '✔' : '✘';         //idem
    specialCharacterRequirementSpan.className = password.includes('@') ? 'green' : 'red';      //idem
});