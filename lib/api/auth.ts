import { app } from "../config/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const signInAsync = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return true;
  } catch (error) {
    return false;
  }
};

export const signOutAsync = async (): Promise<void> => {
  await signOut(auth);
};

export const authStateChanged = (callback: (isLoggedIn: boolean) => void) => {
  onAuthStateChanged(auth, (user) => {
    callback(!!user);
  });
};
