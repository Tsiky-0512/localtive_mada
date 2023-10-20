import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CrudService} from "../crud.service";
import {Property} from "../../pages/properties/interfaces";

@Injectable({
  providedIn: 'root'
})
export class PropertiesService extends CrudService<Property> {

  constructor(private http: HttpClient) {
    super("api/biens", http)
  }

}
