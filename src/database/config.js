import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC9OkFJfUHVvfBybTBrfPyY0TUXxRGeRXA",
  authDomain: "phototwall.firebaseapp.com",
  databaseURL: "https://phototwall.firebaseio.com",
  projectId: "phototwall",
  storageBucket: "phototwall.appspot.com",
  messagingSenderId: "223489637227",
  appId: "1:223489637227:web:42362e4a6895a506676a2e",
  measurementId: "G-RTW95Q3LT5"
};

  firebase.initializeApp(firebaseConfig);


  const database = firebase.database()
  export {database}