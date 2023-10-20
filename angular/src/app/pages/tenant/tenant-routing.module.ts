import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenantFormComponent} from "./tenant-form/tenant-form.component";
import {TenantListComponent} from "./tenant-list/tenant-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: "ajout",
    component: TenantFormComponent,
    pathMatch: "full",
    data: {
      title: "Ajout de locataire"
    }
  },
  {
    path: "modification/:id",
    component: TenantFormComponent,
    pathMatch: "full",
    data: {
      title: "Modification d'un locataire"
    }
  },
  {
    path: "liste",
    component: TenantListComponent,
    pathMatch: "full",
    data: {
      title: "Liste des locataires"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
