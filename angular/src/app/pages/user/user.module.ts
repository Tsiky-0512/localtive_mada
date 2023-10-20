import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent, FormControlDirective, FormDirective,
  InputGroupComponent, InputGroupTextDirective,
  RowComponent
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ContainerComponent,
    RowComponent,
    CardGroupComponent,
    ColComponent,
    InputGroupComponent,
    CardComponent,
    CardBodyComponent,
    ButtonDirective,
    InputGroupTextDirective,
    FormControlDirective,
    IconDirective,
    FormDirective,
    ReactiveFormsModule
  ]
})
export class UserModule { }
