import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm;
  f_name;
  f_email;
  f_password;
  f_prn;
  constructor() { }
  ngOnInit(){
    this.profileForm = new FormGroup({
      name:new FormControl("shrutika"),
      email:new FormControl("shrutika@gmail.com"),
      password:new FormControl("12345"),
      prn:new FormControl('3682'),
    });
  }
  getProfileData(data){

    this.f_name = "name is "+ data.name + 'br';
    this.f_email = "email is " + data.email;
    this.f_password = "password is " +data.password;
    this.f_prn="prn no. is " +data.prn;

  }

}
