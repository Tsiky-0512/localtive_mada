import {getActions} from "./util";
import {Property} from "./properties/interfaces";
import {Router} from "@angular/router";
import {CrudService} from "../services/crud.service";
import {OnInit} from "@angular/core";


export abstract class ListCommon<T> {

  abstract updateCommand: string[];
  abstract router: Router;
  abstract service: CrudService<T>
  data: T[] = [];
  count: number = 0;

  actions = getActions({
    onEdit: async (row: Property) => {
      await this.router.navigate([...this.updateCommand, row._id]);
    },
    onRemove: (row: Property) => {
      if (!row._id) return;
      this.service.delete(row._id).then(res => {
        this.find();
      })
    }
  });

  find(page: number = 1) {
    this.service.findAll(page).then(res => {
      this.count = res.totalDocs;
      this.data = res.docs;
    });
  }

}
