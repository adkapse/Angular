import { Injectable } from '@angular/core';
import { Login } from './login';
import { SelectControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login : Login[] = [];       //variable number of elements
  constructor() { }

  addData(lg : Login) : string
  {
    this.login.push(lg);
    console.log(this.login.length);
    
    this.print();
    return "SUCCESS";
  }
  print() : void {
    for (const d  in this.login) {
      console.log(this.login[d]);
    }
    
  }
}
