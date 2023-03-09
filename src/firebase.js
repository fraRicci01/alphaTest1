import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT_WWkUbj5PzE8ykRD3KFw-bLGCLI5o38",
  authDomain: "test-9007d.firebaseapp.com",
  projectId: "test-9007d",
  storageBucket: "test-9007d.appspot.com",
  messagingSenderId: "57049482191",
  appId: "1:57049482191:web:a26e703a16a90ab3b1c8ba"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore(app)