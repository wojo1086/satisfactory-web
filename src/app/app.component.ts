import { Component, inject } from '@angular/core';
import { AuthService, Providers } from './shared/services/auth/auth.service';
import { Items } from '../assets/data/items';
import { UserService } from './shared/services/user/user.service';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    private firestore: Firestore = inject(Firestore);
    providers = Providers;
    // productionDoc!: AngularFirestoreDocument<Items>;
    navItems = [
        {
            text: 'Productivity',
            icon: 'pi-calculator',
            route: 'productivity'
        }
    ];
    user$ = this.userService.user$;

    constructor(private authService: AuthService,
                private userService: UserService) {
    }

    login(provider: string): void {
        this.authService.login(provider)?.subscribe(res => {
            // this.setProductionObs();
            // this.addSavedDataToProductionForm();
        });
    }

    logout(): void {
        this.authService.logout();
    }

    // private setProductionObs(): void {
    //     const userData = collection(this.firestore, `production/${this.userService.user.uid}`)
    //     collectionData(userData).subscribe((data: any) => console.log(data));
    //     // this.productionDoc = this.afs.doc<Items>(`production/${this.userService.user.uid}`);
    // }
}
