import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router, ActivatedRoute, ParamMap } from '@angular/router'; // CLI imports router


import { LandigPageComponent } from './landig-page/landig-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingINComponent } from './sing-in/sing-in.component';


const routes: Routes = [
    { path: '', component: LandigPageComponent},
    { path: 'VejaDelivery', component: LandigPageComponent},
    { path: 'VejaDelivery/Login', component: LoginComponent},
    { path: 'VejaDelivery/SingIn', component: SingINComponent},
    { path: '**', component: NotFoundComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }