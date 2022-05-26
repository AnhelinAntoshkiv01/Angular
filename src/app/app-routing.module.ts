import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";

import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {CarsComponent} from "./components/cars/cars.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cars', component: CarsComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
