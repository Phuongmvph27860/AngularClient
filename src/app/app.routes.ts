import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FogotpasswordComponent } from './components/fogotpassword/fogotpassword.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"fogotpassword",
        component:FogotpasswordComponent
    },
    {
        path:"home",
        component:HomeComponent
    }
];

