import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import {offlineGuard} from "./guards/offline.guard";
import {connectedGuard} from "./guards/connected.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/biens/liste',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [connectedGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: "biens",
        loadChildren: () => import("./pages/properties/properties.module").then(m => m.PropertiesModule)
      },
      {
        path: "locataire",
        loadChildren: () => import("./pages/tenant/tenant.module").then(m => m.TenantModule)
      },
      {
        path: "factures",
        loadChildren: () => import("./pages/invoice/invoice.module").then(m => m.InvoiceModule)
      }
    ]
  },
  {
    path: "user",
    canActivate: [offlineGuard],
    loadChildren: () => import("./pages/user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
