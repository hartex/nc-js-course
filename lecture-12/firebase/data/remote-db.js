import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbF1tlkiWbnGFypR-3fYiCFwxEZSPmfTk",
    authDomain: "easy-twitter.firebaseapp.com",
    databaseURL: "https://easy-twitter.firebaseio.com",
    projectId: "easy-twitter",
    storageBucket: "",
    messagingSenderId: "6588771267"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const UsersRef = FirebaseApp.database().ref('users');
const TweetsRef = FirebaseApp.database().ref('tweets');

const UserRef = (userId) => FirebaseApp.database().ref('users/' + userId);
const TweetRef = (tweetId) => FirebaseApp.database().ref('tweets/' + tweetId);

export default FirebaseApp;
export { UsersRef, TweetsRef, UserRef, TweetRef };

