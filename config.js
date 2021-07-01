import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDkvROGlfWpvGSvtDh-br3jCcLzSnjAFHU",
    authDomain: "shravan-shakti-app.firebaseapp.com",
    projectId: "shravan-shakti-app",
    storageBucket: "shravan-shakti-app.appspot.com",
    messagingSenderId: "551329154736",
    appId: "1:551329154736:web:3cfd373d10a4a3e0849d75"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();