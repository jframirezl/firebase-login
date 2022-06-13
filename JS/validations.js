let lng = document.querySelector("html").getAttribute("lang");
let name = document.getElementById('name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passCon = document.getElementById('pass-confirmation');

name.addEventListener('keydown', (e) => {
    name.style.color = "black";
});
lastName.addEventListener('keydown', (e) => {
    lastName.style.color = "black";
});
email.addEventListener('keydown', (e) => {
    email.style.color = "black";
});
password.addEventListener('keydown', (e) => {
    password.style.color = "black";
});
passCon.addEventListener('keydown', (e) => {
    passCon.style.color = "black";
});

signUp.addEventListener('click', (e) => {

    checkName(name.value);
    checkLastName(lastName.value);
    checkEmail(email.value);
    checkPassword(password.value, passCon.value);

});


function checkName(name) {
    let check = false;
    let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    if (!name || name == "*") {
        if (lng == 'es') {
            alert("Introduzca su nombre");
        } else if (lng == 'en') {
            alert("Enter your name");
        }
        check = true;
    } else if (!regex.test(name)) {
        if (lng == 'es') {
            alert("Nombre no válido");
        } else if (lng == 'en') {
            alert("Invalid name");
        }
        check = true;
    }
    if (check) {
        document.getElementById('name').value = "*";
        document.getElementById('name').style.color = "red";
    }
}

function checkLastName(lastName) {
    let check = false;
    let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    if (!lastName || lastName == "*") {
        if (lng == 'es') {
            alert("Introduzca su apellido");
        } else if (lng == 'en') {
            alert("Enter your last name");
        }
        check = true;
    } else if (!regex.test(lastName)) {
        if (lng == 'es') {
            alert("Apellido no válido");
        } else if (lng == 'en') {
            alert("Invalid last name");
        }
        check = true;
    }
    if (check) {
        document.getElementById('last-name').value = "*";
        document.getElementById('last-name').style.color = "red";
    }
}

function checkEmail(email) {
    let check = false;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!email || email == "*") {
        if (lng == 'es') {
            alert("Introduzca su eMail");
        } else if (lng == 'en') {
            alert("Enter your eMail");
        }
        check = true;
    } else if (!regex.test(email)) {
        if (lng == 'es') {
            alert("Email no válido");
        } else if (lng == 'en') {
            alert("Invalid eMail");
        }
        check = true;
    }
    if (check) {
        document.getElementById('email').value = "*";
        document.getElementById('email').style.color = "red";
    }
}

function checkPassword(password, passCon) {
    let check = false;
    if (!password) {
        if (lng == 'es') {
            alert("Introduzca una contraseña");
        } else if (lng == 'en') {
            alert("Enter a password");
        }
        check = true;
    } else if (password.length < 6) {
        if (lng == 'es') {
            alert("La contraseña debe tener al menos 6 caracteres");
        } else if (lng == 'en') {
            alert("Password must have at least 6 characters");
        }
        check = true;
    } else if (password !== passCon) {
        if (lng == 'es') {
            alert("Las contraseñas no coinciden");
        } else if (lng == 'en') {
            alert("Passwords don´t match ");
        }
        check = true;
        document.getElementById('pass-confirmation').value = "*";
        document.getElementById('pass-confirmation').style.color = "red";
    }
    if (check) {
        document.getElementById('password').value = "*";
        document.getElementById('password').style.color = "red";
    }
}