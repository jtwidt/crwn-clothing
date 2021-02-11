import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIQs5iB_XOLGtWjvzF8k409Q0NlnURb24',
  authDomain: 'crwn-db-e96ce.firebaseapp.com',
  projectId: 'crwn-db-e96ce',
  storageBucket: 'crwn-db-e96ce.appspot.com',
  messagingSenderId: '1065871095134',
  appId: '1:1065871095134:web:970e3ec26fa7d1ee2b4bcf',
  measurementId: 'G-FHF22D7TPJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
