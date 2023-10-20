import {Component} from '@angular/core';
import {Invoice} from "../interfaces";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {InvoiceListComponent} from "../invoice-list/invoice-list.component";
import {showSuccess} from "../../../services/util";

@Component({
  selector: 'app-invoice-mail-sender',
  templateUrl: './invoice-mail-sender.component.html',
  styleUrls: ['./invoice-mail-sender.component.scss']
})
export class InvoiceMailSenderComponent extends InvoiceListComponent  {

  checked: Invoice[] = [];

  constructor(
    public _service: InvoiceService,
    public _router: Router,
    private _datePipe: DatePipe
  ) {
    super(_service, _router, _datePipe);
  }

  registerCheckedList(invoices: Invoice[]) {
    this.checked = invoices;
  }

  send() {
    if (this.checked.length === 0) {
      alert("Veuillez sélectionnez au moins une facture");
      return;
    }
    this.service.send(this.checked).then(res => {
      showSuccess();
    })
  }

}
