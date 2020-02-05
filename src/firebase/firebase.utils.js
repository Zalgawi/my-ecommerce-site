import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCBIzkbHXWiQQgfxoUNfBKIpK6jG-rVvM",
    authDomain: "ecommerce-db-d9257.firebaseapp.com",
    databaseURL: "https://ecommerce-db-d9257.firebaseio.com",
    projectId: "ecommerce-db-d9257",
    storageBucket: "ecommerce-db-d9257.appspot.com",
    messagingSenderId: "400753343974",
    appId: "1:400753343974:web:d1c6dcc7bd2d25e8366a27",
    measurementId: "G-7J1K16XM1S"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      }catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
