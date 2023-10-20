import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {errorMessages} from "../interfaces";

export type Constraint = 'min' | 'max' | 'required';
export type InputType = 'text' | 'number' | 'date';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() type: InputType = 'text';
  @Input() constraintList?: Constraint[];
  protected readonly errorMessages = errorMessages;
}
