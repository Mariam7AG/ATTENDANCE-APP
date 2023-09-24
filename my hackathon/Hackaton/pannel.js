
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { doc, setDoc, getFirestore, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";



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



var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var input4 = document.getElementById("input4")
var input5 = document.getElementById("input5")
var input6 = document.getElementById("input6")
var input7 = document.getElementById("input7")
var input8 = document.getElementById("input8")
var input9 = document.getElementById("input9")
var input10 = document.getElementById("input10")
var input11 = document.getElementById("input11")
var input12 = document.getElementById("input12")
var input13 = document.getElementById("input13")
var input14 = document.getElementById("input14")
var input15 = document.getElementById("input15")
var input16 = document.getElementById("input16")
var input17 = document.getElementById("input17")
var input18 = document.getElementById("input18")
var input19 = document.getElementById("input19")
var input20 = document.getElementById("input20")
var input21 = document.getElementById("input21")
var input22 = document.getElementById("input22")
var input23 = document.getElementById("input23")
var input24 = document.getElementById("input24")
var input25 = document.getElementById("input25")
var input26 = document.getElementById("input26")
var input27 = document.getElementById("input27")
var input28 = document.getElementById("input28")
var input29 = document.getElementById("input29")
var input30 = document.getElementById("input30")
var input31 = document.getElementById("input31")
var input32 = document.getElementById("input32")
var input33 = document.getElementById("input33")
var input34 = document.getElementById("input34")
var input35 = document.getElementById("input35")
var input36 = document.getElementById("input36")
var input37 = document.getElementById("input37")



const update = document.getElementById("updateDoc");
update.addEventListener("click", async () => {
    const docRef = await setDoc(doc(db, "table", "7338823"), {
        input1: input1.value,
        input2: input2.value,
        input3: input3.value,
        input4: input4.value,
        input5: input5.value,
        input6: input6.value,
        input7: input7.value,
        input8: input8.value,
        input9: input9.value,
        input10: input10.value,
        input11: input11.value,
        input12: input12.value,
        input13: input13.value,
        input14: input14.value,
        input15: input15.value,
        input16: input16.value,
        input17: input17.value,
        input18: input18.value,
        input19: input19.value,
        input20: input20.value,
        input21: input21.value,
        input22: input22.value,
        input23: input23.value,
        input24: input24.value,
        input25: input25.value,
        input26: input26.value,
        input27: input27.value,
        input28: input28.value,
        input29: input29.value,
        input30: input30.value,
        input31: input31.value,
        input32: input32.value,
        input33: input33.value,
        input34: input34.value,
        input35: input35.value,
        input36: input36.value,
        input37: input37.value,
    });
})



window.onload = async () => {
    const docRef = doc(db, "table", "7338823");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    input1.value = docSnap.data().input1
    input2.value = docSnap.data().input2
    input3.value = docSnap.data().input3
    input4.value = docSnap.data().input4
    input5.value = docSnap.data().input5
    input6.value = docSnap.data().input6
    input7.value = docSnap.data().input7
    input8.value = docSnap.data().input8
    input9.value = docSnap.data().input9
    input10.value = docSnap.data().input10
    input11.value = docSnap.data().input11
    input12.value = docSnap.data().input12
    input13.value = docSnap.data().input13
    input14.value = docSnap.data().input14
    input15.value = docSnap.data().input15
    input16.value = docSnap.data().input16
    input17.value = docSnap.data().input17
    input18.value = docSnap.data().input18
    input19.value = docSnap.data().input19
    input20.value = docSnap.data().input20
    input21.value = docSnap.data().input21
    input22.value = docSnap.data().input22
    input23.value = docSnap.data().input23
    input24.value = docSnap.data().input24
    input25.value = docSnap.data().input25
    input26.value = docSnap.data().input26
    input27.value = docSnap.data().input27
    input28.value = docSnap.data().input28
    input29.value = docSnap.data().input29
    input30.value = docSnap.data().input30
    input31.value = docSnap.data().input31
    input32.value = docSnap.data().input32
    input33.value = docSnap.data().input33
    input34.value = docSnap.data().input34
    input35.value = docSnap.data().input35
    input36.value = docSnap.data().input36
    input37.value = docSnap.data().input37
}