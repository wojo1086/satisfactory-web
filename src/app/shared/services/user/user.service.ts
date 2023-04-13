import { Injectable, OnInit } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '@angular/fire/auth';

export interface IUser {
    email: string;
    displayName: string;
    photoUrl: string;
    uid: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnInit {
    private _user$ = new BehaviorSubject<IUser | null>(null);
    user$ = this._user$.asObservable();
    user;

    constructor(private storageService: StorageService) {
        this.user = JSON.parse(this.storageService.getLocal('user'));
        this._user$.next(this.user);
    }

    ngOnInit() {

    }

    setUserData(user: User): void {

        // const userRef = this.afs.doc(`users/${user.uid}`);
        this.user = {
            email: user?.email,
            displayName: user?.displayName,
            photoUrl: user?.photoURL,
            uid: user?.uid
        };
        this.storageService.setLocal('user', JSON.stringify(this.user));
        this._user$.next(this.user);
        // return from(userRef.set(userData, {merge: true})).pipe(
        //     tap(() =>{
        //         this.user = userData;
        //         this.storageService.setLocal('user', JSON.stringify(userData));
        //         this._user$.next(userData);
        //     }),
        //     map(() => userData)
        // )
    }

    logout(): void {
        this._user$.next(null);
    }
}
