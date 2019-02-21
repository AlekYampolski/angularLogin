import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  checkEmail(email){
    const defaultEmail = 'admin@admin.com';
    if(email=='admin@admin.com'){
      return true;
    }
    return false;
  }

  checkUserAccount(email, password){
    const defaultEmail = 'admin@admin.com';
    const defaultPassword = '12345';
    if( (email === defaultEmail) && (password === defaultPassword)){
      return true;
    }
    return false;
  }
}
