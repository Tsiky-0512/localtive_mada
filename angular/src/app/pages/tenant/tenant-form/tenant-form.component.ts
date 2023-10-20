import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {errorMessages, InputProps} from "@ownily-components/interfaces";
import inputList from "./tenant-form.inputs.json";
import {Property} from "../../properties/interfaces";
import {PropertiesService} from "../../../services/properties/properties.service";
import {TenantService} from "../../../services/tenant/tenant.service";
import {FormCommon, FormMode} from "../../form.common";
import {Tenant} from "../interface";

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.scss']
})
export class TenantFormComponent extends FormCommon<Tenant> implements OnInit {

  form: FormGroup;
  properties: Property[] = [];
  afterResult: string[] = ["/locataire", "liste"];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private propertiesService: PropertiesService,
    public service: TenantService,
    public router: Router
  ) {
    super()
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.min(0), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adressePostale: ['', Validators.required]
    });
  }

  mode: FormMode = {
    title: "Ajout de locataire",
    buttonText: "Valider",
    fn: this.service.create
  }

  ngOnInit() {
    this.propertiesService.findEverything().then(res => {
      this.properties = res;
    })
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.mode = {
        title: "Modification d'un locataire",
        buttonText: "Modifier",
        fn: this.service.update
      }
      this.service.findById(id).then(res => {
        console.log(res)
        this.form.patchValue(res);
      })
    }
  }

  inputs: InputProps[] = inputList as InputProps[];
  protected readonly errorMessages = errorMessages;
}
