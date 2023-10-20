import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceGeneratorComponent } from './invoice-generator/invoice-generator.component';
import {CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {OwnilyComponentModule} from "@ownily-components/ownily-component.module";
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceMailSenderComponent } from './invoice-mail-sender/invoice-mail-sender.component';


@NgModule({
  declarations: [
    InvoiceGeneratorComponent,
    InvoiceListComponent,
    InvoiceMailSenderComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    OwnilyComponentModule,
    ReactiveFormsModule,
    CardFooterComponent
  ]
})
export class InvoiceModule { }
