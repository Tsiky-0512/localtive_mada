import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { TenantFormComponent } from './tenant-form/tenant-form.component';
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {OwnilyComponentModule} from "@ownily-components/ownily-component.module";
import {ReactiveFormsModule} from "@angular/forms";
import { TenantListComponent } from './tenant-list/tenant-list.component';


@NgModule({
  declarations: [
    TenantFormComponent,
    TenantListComponent
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    OwnilyComponentModule,
    ReactiveFormsModule
  ]
})
export class TenantModule { }
