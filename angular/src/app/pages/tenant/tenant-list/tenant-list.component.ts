import {Component, OnInit} from '@angular/core';
import {Tenant} from "../interface";
import {GetterFn} from "@ownily-components/interfaces";
import {TenantService} from "../../../services/tenant/tenant.service";
import {ListCommon} from "../../list.common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent extends ListCommon<Tenant> implements OnInit {

  titles: string[] = ["Nom", "Prénom", "Email", "Adresse postale", "Télephone"];
  getters: GetterFn[] = [
    (item: Tenant) => item.nom,
    (item: Tenant) => item.prenom,
    (item: Tenant) => item.email,
    (item: Tenant) => item.bien?.adressePostale,
    (item: Tenant) => item.telephone,
  ]

  updateCommand: string[] = ["/locataire", "modification"];

  constructor(
    public service: TenantService,
    public router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.find();
  }

}
