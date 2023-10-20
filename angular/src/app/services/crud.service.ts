import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {baseUrl} from "../../config/server.config";
import {ApiResponse, ListPaginatedResponse} from "./util";

export class CrudService<T> {

  constructor(private path: string, private _http: HttpClient) { }

  async create (object: T) {
    return await firstValueFrom(this._http.post(baseUrl(`${this.path}`), object));
  }

  async update (object: T) {
    return await firstValueFrom(this._http.put(baseUrl(`${this.path}`), object));
  }

  async findAll(page: number = 1) {
    const response = await firstValueFrom(this._http.get<ApiResponse<ListPaginatedResponse<T>>>(baseUrl(`${this.path}/${page}/10`)));
    return response.data;
  }

  async findEverything () {
    const response = await firstValueFrom(this._http.get<ApiResponse<T[]>>(baseUrl(`${this.path}`)));
    return response.data;
  }

  async findById (id: string) {
    const response= await firstValueFrom(this._http.get<ApiResponse<T>>(baseUrl(`${this.path}/${id}`)));
    return response.data;
  }

  async delete (id: string) {
    return await firstValueFrom(this._http.delete(baseUrl(`${this.path}/${id}`)));
  }
}
