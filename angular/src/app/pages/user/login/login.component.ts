import {Component} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginData} from "../../../../interfaces/user.interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private loginService: UserService,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.form = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }


  doLogin() {
    if (this.form.valid) {
      const data: LoginData = this.form.value;
      this.loginService.login(data).then(async r => {
        await this.router.navigate(["/"]);
      })
    }
    else {
      alert("Verifier vos valeurs!");
    }
  }
}
