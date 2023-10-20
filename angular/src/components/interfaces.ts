import {Constraint, InputType} from "./input/input.component";
import {ThemePalette} from "@angular/material/core";
import {MatPaginatorIntl} from "@angular/material/paginator";

export const errorMessages: {[key: string]: string} = {
  required: 'Ce champ est obligatoire.',
  min: 'Valeur trop petite',
  max: 'Valeur trop grande'
}

export function paginatorConfig () {
  const config = new MatPaginatorIntl();
  config.itemsPerPageLabel= "Elements par page";
  config.nextPageLabel= "Page suivante";
  config.previousPageLabel= "Page precedent";
  config.firstPageLabel= "Première page";
  config.lastPageLabel= "Dernière page";
  return config;
}



export interface InputProps {
  label: string,
  controlName: string,
  constraintList?: Constraint[];
  type: InputType
}


/** action for each row in the list component  */
export interface RowAction {
  color: ThemePalette,
  icon: string,
  onclick: (row: any, index: number) => any
}

export type GetterFn = (item: any) => any;
