import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginData, LoginResponse} from "../../../interfaces/user.interfaces";
import {AuthService} from "./auth.service";
import {User} from "./interfaces";
import {firstValueFrom} from "rxjs";
import {baseUrl} from "../../../config/server.config";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  async login(user: LoginData) {
    let response: LoginResponse;
    response = await  firstValueFrom(this.http.post<LoginResponse>(baseUrl("api/auth/login"), {user}));
    this.authService.save(response);
    return response;
  }

  async register(user: User) {
    return await firstValueFrom(this.http.post(baseUrl("api/auth"), {user}));
  }

}
