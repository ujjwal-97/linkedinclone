import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDUaDUf__4PbTyC_sOatWXfTytcr8oZNgc',
  authDomain: 'linkedin-clone-fd6eb.firebaseapp.com',
  projectId: 'linkedin-clone-fd6eb',
  storageBucket: 'linkedin-clone-fd6eb.appspot.com',
  messagingSenderId: '1008815205799',
  appId: '1:1008815205799:web:a7d8df21cee7686a20da82',
  measurementId: 'G-LBXH4MX7EG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
