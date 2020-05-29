import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB4ouGByJQadtoN5-AZDE8bN9r5VsOoJ8U",
  authDomain: "kriyativeed-e82dd.firebaseapp.com",
  databaseURL: "https://kriyativeed-e82dd.firebaseio.com",
  projectId: "kriyativeed-e82dd",
  storageBucket: "kriyativeed-e82dd.appspot.com",
  messagingSenderId: "611772751447",
  appId: "1:611772751447:web:2636770126590471e10d12",
  measurementId: "G-MGT9CM9KV7"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;