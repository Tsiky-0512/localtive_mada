import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CrudService} from "../services/crud.service";

export interface FormMode {
  fn:  (object: any) => Promise<Object>,
  title: string,
  buttonText: string
}

export abstract class FormCommon<T> {

  abstract mode: FormMode;
  abstract form: FormGroup;
  abstract afterResult: string[];
  abstract router: Router;
  abstract service: CrudService<T>;

  public validate () {
    if (this.form.valid) {
      this.mode.fn.call(this.service, this.form.value).then(async res => {
        await this.router.navigate(this.afterResult);
      })
    }
  }

}
