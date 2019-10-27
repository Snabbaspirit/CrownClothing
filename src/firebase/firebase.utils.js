import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBBLCL1deTnDMjcquBncBNxSbgetJRgYc8",
        authDomain: "crwn-cl.firebaseapp.com",
        databaseURL: "https://crwn-cl.firebaseio.com",
        projectId: "crwn-cl",
        storageBucket: "crwn-cl.appspot.com",
        messagingSenderId: "359183056177",
        appId: "1:359183056177:web:7e1d5248990e55d9d58410",
        measurementId: "G-RV6PPQLT49"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;