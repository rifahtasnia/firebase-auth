import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "fir-auth-dev-f2251.firebaseapp.com",
    projectId: "fir-auth-dev-f2251",
    storageBucket: "fir-auth-dev-f2251.appspot.com",
    messagingSenderId: "586557980375",
    appId: "1:586557980375:web:db1e6c2f4c06a747cefa92"
});

const auth = app.auth();
export{auth};
export default app;
