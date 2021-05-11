import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDuT7FuqCCTrCFip3VMwn1QxIbtZLqRvm8",
  authDomain: "wirely-c503f.firebaseapp.com",
  databaseURL: "https://wirely-c503f-default-rtdb.firebaseio.com",
  projectId: "wirely-c503f",
  storageBucket: "wirely-c503f.appspot.com",
  messagingSenderId: "905255156290",
  appId: "1:905255156290:web:0217296d94aaca753c4bdb"
};
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()