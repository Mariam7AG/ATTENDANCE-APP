import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {  getFirestore,collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";



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
const db = getFirestore(app);
let name = document.getElementById("name")
let contain = document.getElementById("contain")
window.onload = async() => {
    const querySnapshot = await getDocs(collection(db, "Students"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let div = `
        <div class="card">
                <div class="img">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/498/045/original/male-student-icon-design-vector.jpg" alt="">
                </div>
                <div class="data">
                    <div class="text">
                        <div class="text_name" id="name">Name</div>
                        <div class="text_data">${doc.data().studentname}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Father Name</div>
                        <div class="text_data">${doc.data().fathername}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Roll Number</div>
                        <div class="text_data">${doc.data().rollNumber}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Contact</div>
                        <div class="text_data">${doc.data().contact}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">CNIC</div>
                        <div class="text_data">${doc.data().CNIC}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Course Name</div>
                        <div class="text_data">${doc.data().course}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Status</div>
                        <div class="text_data">Complete</div>
                    </div>
                </div>
            </div>
        `
        contain.innerHTML += div
    });

}