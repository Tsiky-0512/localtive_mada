import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertiesFormComponent} from "./properties-form/properties-form.component";
import {PropertiesListComponent} from "./properties-list/properties-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: "ajout",
    component: PropertiesFormComponent,
    pathMatch: "full",
    data: {
      title: "Ajout de bien"
    }
  },
  {
    path: "modification/:id",
    component: PropertiesFormComponent,
    pathMatch: "full",
    data: {
      title: "Modification de bien"
    }
  },
  {
    path: "liste",
    component: PropertiesListComponent,
    pathMatch: "full",
    data: {
      title: "Liste des biens"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
