import {RowAction} from "../../components";
import Swal from "sweetalert2";


export type ActionFn = (row: any, index: number) => any;

export interface ActionFns {
  onEdit: ActionFn,
  onRemove: ActionFn
}

export function getActions ({onEdit, onRemove}: ActionFns): RowAction[] {
  return [
    {
      color: "primary",
      icon: "edit",
      onclick: onEdit
    },
    {
      color: "warn",
      icon: "delete",
      onclick: (row, i) => {
        Swal.fire({
          title: "Confirmation",
          icon: "question",
          showCancelButton: true,
          showCloseButton: true
        }).then(r => {
          if (r.isConfirmed) {
            onRemove(row, i);
          }
        })
      }
    }
  ];
}
