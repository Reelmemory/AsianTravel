import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};
export const RegisterAPI = async (email, password) => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);

    return response;
  } catch (err) {
    return err;
  }
};
export const onLogout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};
