// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
    update
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNdziL-inMX9QNidpU4OzLhhZuPf91-PI",
    authDomain: "user-register-bccf5.firebaseapp.com",
    databaseURL: "https://user-register-bccf5-default-rtdb.firebaseio.com",
    projectId: "user-register-bccf5",
    storageBucket: "user-register-bccf5.appspot.com",
    messagingSenderId: "760109328374",
    appId: "1:760109328374:web:a633ff313e3fc4a79e49d7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const signUp = document.getElementById('signUp');

signUp.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // var username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('User created');
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });

});