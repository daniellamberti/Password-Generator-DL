//  DOM Elements:

const cantidad = document.getElementById("cantidad");
let contrasena = document.getElementById("contrasena");
const mainBtn = document.getElementById("generar");
const resetearEl = document.getElementById("resetear");

// main ARRAY with all characters for password generator:

const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '.', '/', '<', '>', '?'
    ];

// function that generates random passwords using characters from const characters

function generarContra() {
    let contra = "";
    let cantCarac = cantidad.value;
    cantCarac = Number(cantCarac);

    for(i = 0; i < cantCarac; i++) {
        const letter = characters[Math.floor(Math.random() * characters.length)];
        contra += letter;
    }

    return contra;
}

function copyPassw(password) {
    navigator.clipboard.writeText(password)
    contrasena.style.cursor = "";
}

// add Event Listeners for generate, copy and reset passwords:

const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";
const numbers = "0123456789";

// generate passwords addEventListener btn:

generar.addEventListener("click", function () {
    const password = generarContra();
    contrasena.value = password;
    contrasena.style.cursor = "pointer";

    setTimeout(() => {  // to make sure the alert shows up after the password is already displayed
        if ([...symbols].some(symbol => password.includes(symbol)) &&
            [...numbers].some(number => password.includes(number))) {
            alert("Su contraseña es fuerte. Puede copiarla o generar otra si lo prefiere");
        }
        else if ([...symbols].some(symbol => password.includes(symbol)) ||
                [...numbers].some(number => password.includes(number))) {
            alert("Su contraseña es promedio. Considere generar otra para mayor seguridad.");
        }
        else {
            alert("Su contraseña es débil. Se recomiendo generar una nueva.");
        }
    }, 500);
});

// copy password to clipboard addEventListener btn:

contrasena.addEventListener("click", function() {
    console.log("Clicked");
    const password = contrasena.value; // Get the password value
    if (password) {
        copyPassw(password);
        alert("La contraseña fué copiada al clipboard ")
    } else {
        alert("No hay contraseña para copiar.");
    }
    contrasena.value = "";
    cantidad.value = "";
});


console.log(contrasena.value);

//reset passwords addEventListener btn:

resetear.addEventListener("click", function() {
    copyPassw(contrasena)
    contrasena.value = "";
    cantidad.value = "";
})


