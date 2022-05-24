import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentGuardGuard} from "./guard";
import {CommentResolveService} from "./services";

const routes: Routes = [
  {path: '', component: CommentsComponent, children:[
      { path: ':id',
        component: CommentDetailsComponent,
        canActivate: [CommentGuardGuard],
        resolve: {data: CommentResolveService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
