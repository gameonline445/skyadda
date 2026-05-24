import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getAuth,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyBNnnLu7HpCImLl5cIWKmB_eLjsbaR6zxg",

authDomain: "skyadda-1d849.firebaseapp.com",

projectId: "skyadda-1d849",

storageBucket: "skyadda-1d849.firebasestorage.app",

messagingSenderId: "929894889505",

appId: "1:929894889505:web:6e76e0eb701ffe89d60b60"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

onAuthStateChanged(auth, async(user)=>{

if(user){

const docRef = doc(db,"users",user.uid);

const docSnap = await getDoc(docRef);

if(docSnap.exists()){

document.getElementById("wallet").innerHTML =
docSnap.data().wallet;

document.getElementById("winning").innerHTML =
docSnap.data().winning;

}

}

});

document.getElementById("addmoney")
.onclick = function(){

window.location.href =
"addmoney.html";

}