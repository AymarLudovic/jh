import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

interface IUser {
  email: string;
  password: string;
  displayName?: string;
}

class AuthService {
  async register(user: IUser) {
    const { email, password, displayName } = user;
    const credential = await createUserWithEmailAndPassword(auth, email, password);

    if (displayName) {
      await updateProfile(credential.user, { displayName });
    }

    return credential.user;
  }

  async login(user: IUser) {
    const { email, password } = user;
    const credential = await signInWithEmailAndPassword(auth, email, password);

    return credential.user;
  }

  async logout() {
    await signOut(auth);
  }
}

export default new AuthService();