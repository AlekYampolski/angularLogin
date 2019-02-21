import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  access: Boolean;
  constructor(private user: UserService) {
    this.access = false;
  }

  ngOnInit() {
  }
 
  submit(form){
    const correctEmail = this.user.checkEmail(form.controls.email.value);
    let customState = false;
    this.access = false;
    if(correctEmail === true){
      customState = this.user.checkUserAccount(form.controls.email.value, form.controls.password.value);
    } else {
      form.controls.email.errors = {'notMatch' : true}
    }
    if(customState === true){
      this.access = true;
    } else {
      form.controls.password.errors = {'invalid' : true};
    }
 

}}
