import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAo8PS77pLLqWTPrBn5I892e0m0y6fNkIk",
    authDomain: "easy-tweeter.firebaseapp.com",
    databaseURL: "https://easy-tweeter.firebaseio.com",
    projectId: "easy-tweeter",
    storageBucket: "easy-tweeter.appspot.com",
    messagingSenderId: "633445271087"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const UsersRef = FirebaseApp.database().ref('users');
const TweetsRef = FirebaseApp.database().ref('tweets');

export default FirebaseApp;
export { UsersRef, TweetsRef };

