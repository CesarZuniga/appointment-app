import { MsgToastService } from './../../services/msg/msg-toast.service';
import { AuthService } from './../../services/auth/auth.service';
import { UserModel } from './../../models/user-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formSigup!: FormGroup;
  formLogin!: FormGroup;

  constructor(private authSer: AuthService, private msgSer: MsgToastService, private router: Router) {

  }

  ngOnInit() {
    this.initForms();
  }
  initForms() {
    this.formSigup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  loginEmail() {
    if (this.formLogin.valid) {
      let model = new UserModel();
      model = <UserModel>this.formLogin.value;
      this.authSer.loginEmail(model)
        .then(r => {
          this.router.navigate(['/home']);
        })
        .catch(e => this.msgSer.error(e));
    }
  }
  sigup() {
    if (this.formSigup.valid) {
      let registro = new UserModel();
      registro = <UserModel>this.formSigup.value;
      this.authSer.register(registro).then(r => {
        this.msgSer.succes('Usuario registrado');
        this.initForms();
      }).catch(e => this.msgSer.error(e));
    }
  }
  loginFacebook() {
    this.authSer.loginFacebook()
      .then(r => {
        this.router.navigate(['/home']);
      })
      .catch(e => this.msgSer.error(e));
  }
  loginGoogle() {
    this.authSer.loginGoogle()
      .then(r => {
        this.router.navigate(['/home']);
      })
      .catch(e => this.msgSer.error(e));

  }
  // loginTwitter() {
  //   this.authSer.loginTwitter()
  //     .then(r => {
  //       this.router.navigate(['/home']);
  //     })
  //     .catch(e => this.msgSer.error(e));
  // }
}
