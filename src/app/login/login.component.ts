import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
  providers : [LoginService]
})
export class LoginComponent implements OnInit {

  lg : LoginService;
  constructor(ls : LoginService) {      //services are singleton
    this.lg  = ls;
   }

  ngOnInit() {
    this.login.password="asd";
    this.login.userName="apu";
  }
  login : Login = new Login();
  onSubmit()
  {
    console.log(JSON.stringify(this.login));
    this.lg.addData(this.login);
    this.login = new Login();
  }
}
