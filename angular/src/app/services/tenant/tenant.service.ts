import { Injectable } from '@angular/core';
import {CrudService} from "../crud.service";
import {HttpClient} from "@angular/common/http";
import {Tenant} from "../../pages/tenant/interface";

@Injectable({
  providedIn: 'root'
})
export class TenantService extends CrudService<Tenant> {

  constructor(private http: HttpClient) {
    super("api/locataires", http)
  }

}
