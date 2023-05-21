import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/security/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) { }
  logOut(){
    this.authService.logOut();
  }
isLoggedIn(){
  return this.authService.isLoggedIn();
}
  ngOnInit(): void {
  }

}
