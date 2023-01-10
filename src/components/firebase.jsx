// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjBR7YawjReb_amZWOmIbb9dddx2rr_XY",
  authDomain: "react--auth-3f2a0.firebaseapp.com",
  projectId: "react--auth-3f2a0",
  storageBucket: "react--auth-3f2a0.appspot.com",
  messagingSenderId: "25686680923",
  appId: "1:25686680923:web:599db165cb3e29e970267e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      console.log(result.user);
      console.log(result.user.displayName);

      const user = result.user;
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("user", user);
      localStorage.setItem("username", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((err) => console.log(err));
};
export default signInWithGoogle;
