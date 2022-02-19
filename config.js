import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD2srGsdAJ2tj2QDe6ztydfkh3p4KfaY-4",
    authDomain: "vote-1efa2.firebaseapp.com",
    databaseURL: "https://vote-1efa2-default-rtdb.firebaseio.com",
    projectId: "vote-1efa2",
    storageBucket: "vote-1efa2.appspot.com",
    messagingSenderId: "852093947052",
    appId: "1:852093947052:web:b9a578baa3e5d271e82309"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);