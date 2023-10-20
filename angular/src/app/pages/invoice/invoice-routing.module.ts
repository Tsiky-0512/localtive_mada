import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceGeneratorComponent} from "./invoice-generator/invoice-generator.component";
import {InvoiceListComponent} from "./invoice-list/invoice-list.component";
import {InvoiceMailSenderComponent} from "./invoice-mail-sender/invoice-mail-sender.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: "generateur",
    component: InvoiceGeneratorComponent,
    pathMatch: "full",
    data: {
      title: "Génarateur de facture"
    }
  },
  {
    path: "liste",
    component: InvoiceListComponent,
    pathMatch: "full",
    data: {
      title: "Liste des factures"
    }
  },
  {
    path: "mailer",
    component: InvoiceMailSenderComponent,
    pathMatch: "full",
    data: {
      title: "Envoie de mail"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
