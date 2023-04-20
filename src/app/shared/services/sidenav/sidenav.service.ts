import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { distinctUntilChanged, startWith, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SidenavService {
    private _isOpen!: boolean;
    private isOpenSub = new Subject();
    isOpen$ = this.isOpenSub.asObservable().pipe(startWith(true));

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver
            .observe('(max-width: 576px)')
            .pipe(distinctUntilChanged())
            .subscribe((value) => {
                this._isOpen = !value.matches;
                this.pushToSubject();
            });
    }

    toggle(): void {
        this._isOpen = !this._isOpen;
        this.pushToSubject();
    }

    close(): void {
        this._isOpen = false;
        this.pushToSubject();
    }

    open(): void {
        this._isOpen = true;
        this.pushToSubject();
    }

    private pushToSubject(): void {
        this.isOpenSub.next(this._isOpen);
    }
}
