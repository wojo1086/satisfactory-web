import { Component, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SidenavService } from '../shared/services/sidenav/sidenav.service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.sass']
})
export class TopBannerComponent {
    @Input() showSearch = false;
    search = this.fb.control('');
    @Output() searchResult = this.search.valueChanges;

    constructor(private fb: FormBuilder, private sidenavService: SidenavService) {
    }

    toggleSidenav(): void {
        this.sidenavService.toggle();
    }

}
