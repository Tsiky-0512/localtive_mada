import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user/user.service";
import {showSuccess} from "../../../services/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: UserService,
    private router: Router
  ) {
    this.form = this.builder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  createAccount() {
    if (this.form.valid) {
      console.log(this.form.value);
      const formData = this.form.value;
      if (formData.password != formData.confirmPassword) {
        alert("Les mots de passes ne sont pas les mêmes");
        return;
      }
      this.service.register(formData).then(async res => {
        showSuccess();
        await this.router.navigate(["/user", "login"]);
      })
    }
    else {
      alert("Vérifiez vos valeurs");
    }
  }
}
