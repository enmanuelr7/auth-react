import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/analytics'

let firebaseConfig

if (process.env.NODE_ENV === 'production') {
  firebaseConfig = {
    apiKey: "AIzaSyAy013NRWxoX7A1Kq2y86TL0j_HK-MXa-g",
    authDomain: "auth-react-51ba7.firebaseapp.com",
    databaseURL: "https://auth-react-51ba7.firebaseio.com",
    projectId: "auth-react-51ba7",
    storageBucket: "auth-react-51ba7.appspot.com",
    messagingSenderId: "712820859690",
    appId: "1:712820859690:web:a2e684564df32dae647453",
    measurementId: "G-3C4376CMKN",
  };

} else if (process.env.NODE_ENV === 'development') {
  firebaseConfig = {
    apiKey: "AIzaSyAq6_ruQsjYPJTVbSOTq15q_PW6N0cmLU8",
    authDomain: "auth-react-dev-bd9fe.firebaseapp.com",
    databaseURL: "https://auth-react-dev-bd9fe.firebaseio.com",
    projectId: "auth-react-dev-bd9fe",
    storageBucket: "auth-react-dev-bd9fe.appspot.com",
    messagingSenderId: "864453277938",
    appId: "1:864453277938:web:dfa6fae63120b5fe61386b"
  };
}

const app = firebase.initializeApp(firebaseConfig);
if (process.env.NODE_ENV === 'production') firebase.analytics();
export default app;
export const auth = firebase.auth();
