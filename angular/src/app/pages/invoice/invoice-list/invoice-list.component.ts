import {Component, OnInit} from '@angular/core';
import {ListCommon} from "../../list.common";
import {GetterFn} from "@ownily-components/interfaces";
import {Router} from "@angular/router";
import {Invoice} from "../interfaces";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent extends ListCommon<Invoice> implements OnInit  {

  titles: string[] = ["Quittance", "Paiement", "Mois", "Locataire", "Adresse postale", "Loyer"];

  getters: GetterFn[] = [
    (item: Invoice) => this.datePipe.transform(item.dateQuittance),
    (item: Invoice) => this.datePipe.transform(item.datePaiement),
    (item: Invoice) => item.mois,
    (item: Invoice) => item.locataireDetails.nom + ' ' + item.locataireDetails.prenom,
    (item: Invoice) => item.bienDetails?.adressePostale,
    (item: Invoice) => item.loyer
  ];

  override actions = [];

  updateCommand: string[] = [];

  constructor(
    public service: InvoiceService,
    public router: Router,
    private datePipe: DatePipe
  ) {
    super();
  }

  ngOnInit() {
    this.find();
  }
}
