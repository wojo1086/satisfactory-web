import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    navItems = [
        {
            text: 'Productivity',
            icon: 'pi-calculator',
            route: 'productivity'
        }
    ];
}
