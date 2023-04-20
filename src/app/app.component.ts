import { Component, inject } from '@angular/core';
import { AuthService, Providers } from './shared/services/auth/auth.service';
import { UserService } from './shared/services/user/user.service';
import { Firestore } from '@angular/fire/firestore';
import { BreakpointObserver } from '@angular/cdk/layout';
import { distinctUntilChanged, map, withLatestFrom } from 'rxjs';
import { SidenavService } from './shared/services/sidenav/sidenav.service';

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
    isOpen$ = this.sidenavService.isOpen$;
    visibilityClass$ = this.sidenavService.isOpen$.pipe(
        withLatestFrom(this.breakpointObserver.observe('(max-width: 576px)').pipe(distinctUntilChanged())),
        map(([isOpen, breakpoint]) => {
            let className = '';
            if (breakpoint.matches && isOpen) {
                className = 'open';
            } else if (!breakpoint.matches && !isOpen) {
                className = 'w-4rem';
            }
            return className;
        })
    );

    constructor(private authService: AuthService,
                private breakpointObserver: BreakpointObserver,
                private sidenavService: SidenavService,
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
}
