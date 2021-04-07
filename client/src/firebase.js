import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRhzzN0CPcKdOwrWUdtoeQlPXo4anN6SU',
  authDomain: 'hardwarestore-20abb.firebaseapp.com',
  projectId: 'hardwarestore-20abb',
  storageBucket: 'hardwarestore-20abb.appspot.com',
  messagingSenderId: '1001683007896',
  appId: '1:1001683007896:web:8bfc918f4e4850a5c013ed',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
