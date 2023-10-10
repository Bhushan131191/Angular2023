import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';

const routes: Routes = 
[{
  path : '', redirectTo: 'Login', pathMatch: 'full'
 },
 {
  path : 'login', component: LoginComponent
 },
 {
  path: 'signup', component: SignupComponent
 },
 {
  path: 'restaurant', component:RestaurantDashComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
