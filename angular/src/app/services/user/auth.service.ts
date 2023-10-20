import { Injectable } from '@angular/core';
import {LoginResponse} from "../../../interfaces/user.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  key = "token";
  storage = localStorage;
  temp?: string;

  constructor() { }

  save (resp: LoginResponse) {
    this.temp = resp.data.token;
    this.storage.setItem(this.key, this.temp);
  }

  get () {
    if (this.temp) return this.temp;
    return this.storage.getItem(this.key);
  }

  isConnected () {
    return this.get() != undefined && this.get() != null;
  }

}
