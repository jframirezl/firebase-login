let lng = document.querySelector("html").getAttribute("lang");
let name = document.getElementById('name');
let lastName = document.getElementById('last-name');
let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passCon = document.getElementById('pass-confirmation');
let message = document.getElementById('message');

name.addEventListener('keydown', (e) => {
    name.style.color = "black";
});
lastName.addEventListener('keydown', (e) => {
    lastName.style.color = "black";
});
userName.addEventListener('keydown', (e) => {
    userName.style.color = "black";
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
    message.innerHTML = "";
    var check = true;

    check = checkName(name.value);

    if (check) {
        check = checkLastName(lastName.value);
        if (check) {
            check = checkUser(userName.value);
            if (check) {
                check = checkEmail(email.value);
                if (check) {
                    checkPassword(password.value, passCon.value);
                }
            }
        }
    }
});


function checkName(name) {
    let check = false;
    let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    if (!name || name == "*") {
        if (lng == 'es') {
            // alert("Introduzca su nombre");
            message.innerHTML = "* Introduzca su nombre";
        } else if (lng == 'en') {
            // alert("Enter your name");
            message.innerHTML = "* Enter your name";
        }
        check = true;
    } else if (!regex.test(name)) {
        if (lng == 'es') {
            // alert("Nombre no válido");
            message.innerHTML = "* Nombre no válido";
        } else if (lng == 'en') {
            // alert("Invalid name");
            message.innerHTML = "* Invalid name";
        }
        check = true;
    }
    if (check) {
        document.getElementById('name').value = "*";
        document.getElementById('name').style.color = "red";
        return false;
    } else {
        return true;
    }
}

function checkLastName(lastName) {
    let check = false;
    let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    if (!lastName || lastName == "*") {
        if (lng == 'es') {
            // alert("Introduzca su apellido");
            message.innerHTML = "* Introduzca su apellido";
        } else if (lng == 'en') {
            // alert("Enter your last name");}
            message.innerHTML = "* Enter your last name";
        }
        check = true;
    } else if (!regex.test(lastName)) {
        if (lng == 'es') {
            // alert("Apellido no válido");
            message.innerHTML = "* Apellido no válido";
        } else if (lng == 'en') {
            // alert("Invalid last name");
            message.innerHTML = "* Invalid last name" ;
        }
        check = true;
    }
    if (check) {
        document.getElementById('last-name').value = "*";
        document.getElementById('last-name').style.color = "red";
        return false;
    } else {
        return true;
    }
}

function checkUser(userName) {
    let check = false;
    let regex = /^[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ0-9\u00f1\u00d1]+$/g;
    if (!userName || userName == "*") {
        if (lng == 'es') {
            // alert("Introduzca su Nombre de usuario");
            message.innerHTML = "* Introduzca su Nombre de usuario";
        } else if (lng == 'en') {
            // alert("Enter your Username");
            message.innerHTML = "* Enter your Username";
        }
        check = true;
    } else if (!regex.test(userName)) {
        if (lng == 'es') {
            // alert("Nombre de usuario no válido");
            message.innerHTML = "* Nombre de usuario no válido";
        } else if (lng == 'en') {
            // alert("Invalid Username");
            message.innerHTML = "* Invalid Username";
        }
        check = true;
    }
    if (check) {
        document.getElementById('username').value = "*";
        document.getElementById('username').style.color = "red";
        return false;
    } else {
        return true;
    }
}

function checkEmail(email) {
    let check = false;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!email || email == "*") {
        if (lng == 'es') {
            // alert("Introduzca su eMail");
            message.innerHTML = "* Introduzca su eMail";
        } else if (lng == 'en') {
            // alert("Enter your eMail");
            message.innerHTML = "* Enter your eMail";
        }
        check = true;
    } else if (!regex.test(email)) {
        if (lng == 'es') {
            // alert("Email no válido");
            message.innerHTML = "* Email no válido";
        } else if (lng == 'en') {
            // alert("Invalid eMail");
            message.innerHTML = "* Invalid eMail";
        }
        check = true;
    }
    if (check) {
        document.getElementById('email').value = "*";
        document.getElementById('email').style.color = "red";
        return false;
    } else {
        return true;
    }
}

function checkPassword(password, passCon) {
    let check = false;
    if (!password) {
        if (lng == 'es') {
            // alert("Introduzca una contraseña");
            message.innerHTML = "* Introduzca una contraseña";
        } else if (lng == 'en') {
            // alert("Enter a password");
            message.innerHTML = "* Enter a password";
        }
        check = true;
    } else if (password.length < 6) {
        if (lng == 'es') {
            // alert("La contraseña debe tener al menos 6 caracteres");
            message.innerHTML = "* La contraseña debe tener al menos 6 caracteres";
        } else if (lng == 'en') {
            // alert("Password must have at least 6 characters");
            message.innerHTML = "* Password must have at least 6 characters";
        }
        check = true;
    } else if (password !== passCon) {
        if (lng == 'es') {
            // alert("Las contraseñas no coinciden");
            message.innerHTML = "* Las contraseñas no coinciden";
        } else if (lng == 'en') {
            // alert("Passwords does´t match ");
            message.innerHTML = "* Passwords does´t match";
        }
        check = true;
        document.getElementById('pass-confirmation').value = "*";
        document.getElementById('pass-confirmation').style.color = "red";
    }
    if (check) {
        document.getElementById('password').value = "*";
        document.getElementById('password').style.color = "red";
        return false;
    } else {
        return true;
    }
}