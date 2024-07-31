import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAvsMZNXm3nCwsb0hafwmYf-bHzIN1ap3M',
  authDomain: 'linkedin-fdcc4.firebaseapp.com',
  projectId: 'linkedin-fdcc4',
  storageBucket: 'linkedin-fdcc4.appspot.com',
  messagingSenderId: '1020048653441',
  appId: '1:1020048653441:web:744b4d41f3446f3d2ee180',
  measurementId: 'G-91BZF26RD8'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, db, storage };
