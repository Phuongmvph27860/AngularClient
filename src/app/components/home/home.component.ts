import { Component, ViewChild, ViewChildren } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatMenuModule, RouterLink, MatButtonModule, MatSidenavModule, MatToolbarModule, MatInputModule, MatIconModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor() { 

  }

  ngAfterViewInit() {
    if (this.sidenav) {
      this.sidenav.open();
    }

  }

}
