import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {InputProps} from "@ownily-components/interfaces";
import inputList from "./invoice.inputs.json";
import {InvoiceDataGenerator} from "../interfaces";

@Component({
  selector: 'app-invoice-generator',
  templateUrl: './invoice-generator.component.html',
  styleUrls: ['./invoice-generator.component.scss']
})
export class InvoiceGeneratorComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public service: InvoiceService,
    public router: Router
  ) {
    this.form = this.fb.group({
      dateQuittance: ['', Validators.required],
      datePaiement: ['', [Validators.min(0), Validators.required]],
      mois: [1, [Validators.required, Validators.min(1), Validators.max(12)]],
      year: [2023, [Validators.required, Validators.min(0)]],
    });
  }

  inputs: InputProps[] = inputList as InputProps[];

  months: string[] = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];


  validate() {
    if (this.form.valid) {
      const formData = this.form.value;
      const data: InvoiceDataGenerator = {
        ...formData,
        mois: this.months[formData.mois - 1] + ' ' + formData.year
      }
      this.service.generate(data).then(async res => {
        await this.router.navigate(["/factures", "liste"]);
      })
    }
  }
}
