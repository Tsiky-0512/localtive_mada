import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CalloutModule, NavModule, TabsModule, UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { InputComponent } from './input/input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { TableComponent } from '@ownily-components/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { PaginatedTableComponent } from '@ownily-components/paginated-table/paginated-table.component';
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {paginatorConfig} from "@ownily-components/interfaces";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    InputComponent,
     TableComponent,
     PaginatedTableComponent
  ],
  exports: [
    InputComponent,
    TableComponent,
    PaginatedTableComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    IconModule,
    RouterModule,
    TabsModule,
    UtilitiesModule,
    CalloutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: paginatorConfig()
    },
  ]
})
export class OwnilyComponentModule {
}
