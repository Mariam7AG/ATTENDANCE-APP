import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";



const firebaseConfig = {
    apiKey: "AIzaSyA_nCZi1wbCnIV9D-hu_uAzyLPRI3okd-s",
    authDomain: "wma1-69db0.firebaseapp.com",
    databaseURL: "https://wma1-69db0-default-rtdb.firebaseio.com",
    projectId: "wma1-69db0",
    storageBucket: "wma1-69db0.appspot.com",
    messagingSenderId: "505492878771",
    appId: "1:505492878771:web:3aab9a3ea9d8c5a107c7c6",
    measurementId: "G-XNDJCEN9C0"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();
const storage = getStorage();



console.log("Firebase initialized");



const signup = () => {
    const username = document.getElementById("first-name").value; 
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const repeatPassword = document.getElementById("repeat-password").value;
    const image = document.getElementById("image");



    if (password !== repeatPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }



    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Successfully signed up:", user);



            const imageFile = image.files[0];
            const mediaRef = storageRef(storage, "images/" + imageFile.name);



            uploadBytes(mediaRef, imageFile)
                .then((uploadSnapshot) => {
                    console.log("Successfully uploaded image:", uploadSnapshot.ref);



                    getDownloadURL(uploadSnapshot.ref)
                        .then((downloadURL) => {
                            const userData = {
                                name: username,
                                email: email,
                                imageUrl: downloadURL
                            };
                            const userReference = ref(database, "users/" + user.uid);
                            set(userReference, userData)
                                .then(() => {
                                    console.log("Successfully added data in database");
                                })
                                .catch((error) => {
                                    console.error("Error adding data to database:", error);
                                    alert("Signup failed. Please try again.");
                                });
                        })
                        .catch((error) => {
                            console.error("Error getting image download URL:", error);
                            alert("Signup failed. Please try again.");
                        });
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                    alert("Signup failed. Please try again.");
                });
        })
        .catch((error) => {
            console.error("Error signing up:", error);
            alert("Signup failed. Please try again.");
        });
};

const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        signup();
    });
}



const login = () => {
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Successfully logged in:", user);
            window.location.href = "admin.html"

            const userReference = ref(database, "users/" + user.uid);

            onValue(userReference, (snapshot) => {
                const userData = snapshot.val();
                console.log("User data:", userData);
            });
        })
        .catch((error) => {
            console.error("Error logging in:", error);
            alert("Login failed. Please try again.");
        });
};



const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        login();
    });
}
