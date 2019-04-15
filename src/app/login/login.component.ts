import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

login_email;
login_password;

  constructor() { }

  ngOnInit() {
  }


  getLoginData(data)
  {
 this.login_email=data.emailid;
 this.login_password=data.passwd;

  }

}
