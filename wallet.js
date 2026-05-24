import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getFirestore,

doc,

getDoc,

setDoc,

updateDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyBNNnLu7HpCImLl5cIWKmB_eLjsbaR6zxg",

authDomain: "skyadda-1d849.firebaseapp.com",

projectId: "skyadda-1d849",

storageBucket: "skyadda-1d849.firebasestorage.app",

messagingSenderId: "929894889505",

appId: "1:929894889505:web:6e76e0eb701ffe89d60b60"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let uid = localStorage.getItem("uid");

async function loadWallet(){

const ref = doc(db,"users",uid);

const snap = await getDoc(ref);

if(snap.exists()){

document.getElementById("wallet").innerHTML =
snap.data().money;

}else{

await setDoc(ref,{

money:0

});

document.getElementById("wallet").innerHTML = 0;

}

}

loadWallet();

document.getElementById("addmoney").onclick = async function(){

let add = prompt("Enter Amount");

if(add != null){

const ref = doc(db,"users",uid);

const snap = await getDoc(ref);

let oldMoney = snap.data().money;

let newMoney = parseInt(oldMoney)
+ parseInt(add);

await updateDoc(ref,{

money:newMoney

});

document.getElementById("wallet").innerHTML =
newMoney;

alert("Money Added Successfully");

}

}
