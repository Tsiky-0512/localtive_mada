import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Invoice, InvoiceDataGenerator} from "../../pages/invoice/interfaces";
import {firstValueFrom} from "rxjs";
import {baseUrl} from "../../../config/server.config";
import {CrudService} from "../crud.service";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends CrudService<Invoice>{

  constructor(private http: HttpClient) {
    super("api/factures", http)
  }

  async generate (data: InvoiceDataGenerator) {
    return await firstValueFrom(this.http.post(baseUrl("api/factures/generate"), data));
  }

  async send(invoices: Invoice[]) {
    return await Promise.all(invoices.map(invoice => {
      return firstValueFrom(this.http.get(baseUrl(`api/factures/send/${invoice._id}`)));
    }))
  }

}
