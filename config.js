import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBOXynKaV-NI-NKvHrFZH5KbJuiA25dKpQ",
  authDomain: "e-library-274c3.firebaseapp.com",
  projectId: "e-library-274c3",
  storageBucket: "e-library-274c3.appspot.com",
  messagingSenderId: "177642381007",
  appId: "1:177642381007:web:487f91140f4b5e400621ba"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
