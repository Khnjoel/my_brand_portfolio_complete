
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCtGxTkR4F0vwIwH72Ts5grruRKsqGZ0U",
  authDomain: "devkwizera-c1ddd.firebaseapp.com",
  projectId: "devkwizera-c1ddd",
  storageBucket: "devkwizera-c1ddd.appspot.com",
  messagingSenderId: "987293906553",
  appId: "1:987293906553:web:913e70af4b9aca9a93c6a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function login() {
  const loginEmail = document.getElementById('email').value;
  const loginPassword = document.getElementById('password').value;
  const noauth = document.getElementById('unauth');
  const userfound = document.getElementById('authed');
  // Validate
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginEmail) && loginPassword != "") {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        noauth.style.display="none";
      
      
          userfound.style.display="block";
          userfound.innerHTML="Success! Redirecting...";

          setInterval(() => {
            location='home.html'
          }, 2000);
      })
      .catch((error) => {
        noauth.style.display = "block";
        noauth.innerHTML = "Wrong Email/Password";
      });
  } else {
    noauth.style.display = "block";
    noauth.innerHTML = "";
    noauth.innerHTML = "Wrong Email or empty password";
  }
}

document.getElementById('loginbtn').addEventListener('click', function () {
  login();
})
