import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCWGa01XDDVMtga_z3ifbAQOoTY5LilBqI",
  authDomain: "yesvel-9e3b0.firebaseapp.com",
  databaseURL: "https://yesvel-9e3b0.firebaseio.com",
  projectId: "yesvel-9e3b0",
  storageBucket: "yesvel-9e3b0.appspot.com",
  messagingSenderId: "1054407050046"
};
firebase.initializeApp(config)

export default firebase

const db = firebase.database()
const auth = firebase.auth()
export { db, auth }