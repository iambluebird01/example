import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOaaioexB20ZqCtuIDWPM2CxWzIeszehY',
  authDomain: 'fb-clone-2f360.firebaseapp.com',
  projectId: 'fb-clone-2f360',
  storageBucket: 'fb-clone-2f360.appspot.com',
  messagingSenderId: '868224924645',
  appId: '1:868224924645:web:04e5c4e82a2321aab04d0c',
  measurementId: 'G-TMD3K96ZTY',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
