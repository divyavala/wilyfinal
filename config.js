import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBNR1ABN53YhrsECl3-t7sn34az0CZBdb8", 
  authDomain: "wily-9feac.firebaseapp.com", 
  projectId: "wily-9feac", 
  storageBucket: "wily-9feac.appspot.com",
   messagingSenderId: "450536992854",
    appId: "1:450536992854:web:9d485ac7fdad8907f4cbf7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();