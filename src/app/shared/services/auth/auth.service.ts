import { inject, Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject, catchError, concatMap, from, map, Observable, of, Subscription, tap, throwError } from 'rxjs';
import { UserService } from '../user/user.service';
import { Auth, signInWithPopup, user, User, UserCredential } from '@angular/fire/auth';

export enum Providers {
    Google = 'google'
}

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {
    private auth: Auth = inject(Auth);
    user$ = user(this.auth);
    userSubscription: Subscription;
    private _isLoggedIn$ = new BehaviorSubject(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    get isLoggedIn(): boolean {
        const user = JSON.parse(this.storageService.getLocal('user'));
        return !!user;
    }

    constructor(private afAuth: AngularFireAuth,
                private userService: UserService,
                private storageService: StorageService) {
        this.userSubscription = this.user$.subscribe((user: User | null) => {
            console.log(user);
            if (user) {
                this.userService.setUserData(user);
                this._isLoggedIn$.next(true);
            } else {
                this._isLoggedIn$.next(false);
            }
        });
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    login(provider: string): Observable<UserCredential> | undefined {
        let loginObs;
        switch (provider) {
            case Providers.Google:
                loginObs = this.authLogin(new GoogleAuthProvider());
                break;
        }
        return loginObs;
    }

    logout(): void {
        this.auth.signOut();
        this.storageService.removeLocal('user');
        this.userService.logout();
    }

    private authLogin(provider: GoogleAuthProvider): Observable<UserCredential> {
        return from(signInWithPopup(this.auth, provider));
    }
}
