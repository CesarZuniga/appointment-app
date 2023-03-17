import { UserModel } from './../../models/user-model';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private auth: Auth) { }

register(user: UserModel): Promise<UserCredential>{
  return createUserWithEmailAndPassword(this.auth, user.email, user.password);
}
loginEmail(user: UserModel): Promise<UserCredential>{
  return signInWithEmailAndPassword(this.auth, user.email, user.password);
}
logout(): Promise<void>{
  return signOut(this.auth);
}
loginFacebook(): Promise<UserCredential>{
  return signInWithPopup(this.auth, new FacebookAuthProvider())
}
loginGoogle(): Promise<UserCredential>{
  return signInWithPopup(this.auth, new GoogleAuthProvider())

}
loginTwitter(): Promise<UserCredential>{
  return signInWithPopup(this.auth, new TwitterAuthProvider())
}

}
