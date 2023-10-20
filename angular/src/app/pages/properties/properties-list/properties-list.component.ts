import {Component, OnInit} from '@angular/core';
import {GetterFn} from "@ownily-components/interfaces";
import {Property} from "../interfaces";
import {PropertiesService} from "../../../services/properties/properties.service";
import {Router} from "@angular/router";
import {ListCommon} from "../../list.common";

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent extends ListCommon<Property> implements OnInit  {

  titles: string[] = ["Type", "Loyer", "Surface", "Adresse postale"];

  getters: GetterFn[] = [
    (item: Property) => item.typeBien,
    (item: Property) => item.loyer,
    (item: Property) => item.surface,
    (item: Property) => item.adressePostale,
  ];

  updateCommand: string[] = ["/biens", "modification"];

  constructor(
    public service: PropertiesService,
    public router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.find();
  }

}
