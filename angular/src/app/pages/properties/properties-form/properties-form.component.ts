import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {errorMessages, InputProps} from "@ownily-components/interfaces";
import inputList from "./properties-form.inputs.json";
import {PropertiesService} from "../../../services/properties/properties.service";
import {FormCommon, FormMode} from "../../form.common";
import {Property} from "../interfaces";

@Component({
  selector: 'app-properties-form',
  templateUrl: './properties-form.component.html',
  styleUrls: ['./properties-form.component.scss']
})
export class PropertiesFormComponent extends FormCommon<Property> implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public service: PropertiesService,
    public router: Router
  ) {
    super();
    this.form = this.fb.group({
      typeBien: ['', Validators.required],
      loyer: [0, [Validators.min(0), Validators.required]],
      surface: [null, [Validators.required, Validators.min(0)]],
      adressePostale: ['', Validators.required],
    });
  }

  afterResult: string[] = ["/biens", "liste"];

  mode: FormMode = {
    title: "Ajout de bien",
    buttonText: "Valider",
    fn: this.service.create,
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.mode = {
        title: "Modification d'un bien",
        buttonText: "Modifier",
        fn: this.service.update
      }
      this.form.addControl("_id", new FormControl([''], Validators.required));
      this.service.findById(id).then(res => {
        this.form.patchValue(res);
      })
    }
  }

  inputs: InputProps[] = inputList as InputProps[];
  protected readonly errorMessages = errorMessages;

}
