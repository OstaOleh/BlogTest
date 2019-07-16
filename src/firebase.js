import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAD3xVlQGNawMgnM3_cut4ZtcySTQE9UQQ",
    authDomain: "test-9031c.firebaseapp.com",
    databaseURL: "https://test-9031c.firebaseio.com",
    projectId: "test-9031c",
    storageBucket: "test-9031c.appspot.com",
    messagingSenderId: "954362876553",
    appId: "1:954362876553:web:23e8cf81b78061f7"
};
firebase.initializeApp(firebaseConfig);

export default firebase;