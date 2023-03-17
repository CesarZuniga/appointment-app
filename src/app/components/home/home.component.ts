import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSer: AuthService, private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.authSer.logout().then(r => this.router.navigate(['/login']));
  }

}
