import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.post = data)
    }
}
