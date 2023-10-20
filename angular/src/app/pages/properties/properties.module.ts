import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesFormComponent } from './properties-form/properties-form.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
import {OwnilyComponentModule} from "@ownily-components/ownily-component.module";
import { PropertiesListComponent } from './properties-list/properties-list.component';


@NgModule({
  declarations: [
    PropertiesFormComponent,
    PropertiesListComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    OwnilyComponentModule
  ]
})
export class PropertiesModule { }
