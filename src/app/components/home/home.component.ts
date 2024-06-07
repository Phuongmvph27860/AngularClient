import { Component, ViewChild, ViewChildren, inject } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { HttpService } from '../../http.service';
import { IUser } from '../../../interface/user';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatMenuModule, RouterLink, MatButtonModule, MatSidenavModule, MatToolbarModule, MatInputModule, MatIconModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  httpService = inject(HttpService);
  user : IUser = {} as IUser;
  userid = localStorage.getItem('userid')!;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor() { 

  }

  ngOnInit() {
    this.httpService.getuserbyid(this.userid).subscribe(result =>{
      this.user = result;
    })
  }
  

  moside() {
      this.sidenav.open();
  }

}
