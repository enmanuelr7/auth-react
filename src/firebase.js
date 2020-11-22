import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAy013NRWxoX7A1Kq2y86TL0j_HK-MXa-g",
  authDomain: "auth-react-51ba7.firebaseapp.com",
  databaseURL: "https://auth-react-51ba7.firebaseio.com",
  projectId: "auth-react-51ba7",
  storageBucket: "auth-react-51ba7.appspot.com",
  messagingSenderId: "712820859690",
  appId: "1:712820859690:web:a2e684564df32dae647453",
  measurementId: "G-3C4376CMKN",
};

const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default app;
export const auth = firebase.auth();
