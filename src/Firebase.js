import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3Y-6m_eLS9EE4jTvD03Nr6QKhnsX35As",
  authDomain: "slack-clone-4d14b.firebaseapp.com",
  projectId: "slack-clone-4d14b",
  storageBucket: "slack-clone-4d14b.appspot.com",
  messagingSenderId: "960592398879",
  appId: "1:960592398879:web:be3486a456eebc68e2e32a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
