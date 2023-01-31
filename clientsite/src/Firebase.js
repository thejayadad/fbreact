
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDy3HHowIm2fT2qR8Ob9wQlydppALe-rmY",
    authDomain: "notes-869dd.firebaseapp.com",
    projectId: "notes-869dd",
    storageBucket: "notes-869dd.appspot.com",
    messagingSenderId: "249038434175",
    appId: "1:249038434175:web:89a724ea19e60a2ae4744a",
    measurementId: "G-WJKZG5M1KG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};