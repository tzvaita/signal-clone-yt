import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDayrrugISBGyzTqgMkmIjVqwcDbCuGZis",
  authDomain: "signal-clone-yt-9ea64.firebaseapp.com",
  projectId: "signal-clone-yt-9ea64",
  storageBucket: "signal-clone-yt-9ea64.appspot.com",
  messagingSenderId: "745709268107",
  appId: "1:745709268107:web:1befd3046ad931a1c5788e"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }