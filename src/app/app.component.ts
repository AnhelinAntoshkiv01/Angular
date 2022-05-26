import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isAuthorization()) {
      this.router.navigate(['cars'])
    }
  }
}
