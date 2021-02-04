import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCo9yTLsUYIfTqPaC3YBQRPL0tkBWD3was",
    authDomain: "linkedin-clone-yt-6a4d1.firebaseapp.com",
    projectId: "linkedin-clone-yt-6a4d1",
    storageBucket: "linkedin-clone-yt-6a4d1.appspot.com",
    messagingSenderId: "723571031457",
    appId: "1:723571031457:web:dab4e50edf8539ec725fe0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};