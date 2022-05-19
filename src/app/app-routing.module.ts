import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";

import {MainLayoutComponent} from "./main-layout/main-layout.component";

const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: () => import('./modules').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules').then(value => value.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules').then(value => value.CommentModule)},
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
