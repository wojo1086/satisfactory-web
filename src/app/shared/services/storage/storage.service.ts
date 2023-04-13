import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }

    setLocal(key: string, value: any): void {
        localStorage.setItem(key, value);
    }

    getLocal(key: string): any {
        return localStorage.getItem(key);
    }

    removeLocal(key: string): void {
        localStorage.removeItem(key);
    }
}
