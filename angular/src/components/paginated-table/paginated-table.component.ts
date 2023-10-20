import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {GetterFn, RowAction} from "@ownily-components/interfaces";

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent  {

  @Input() count !: number;
  @Input() pageSize !: number;
  @Output() page = new EventEmitter<number>();

  // table attrs
  @Input() actions : RowAction[] = [];
  @Input() getters!: GetterFn[];
  @Input() onRowClick?: (row: any) => any;
  @Input() titles !: string[];
  @Input() data: any[] = [];


  // checkbox attr
  @Output() emitChecked: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() showCheckBox: boolean = false;

  pageChange(e: PageEvent) {
    this.page.emit(e.pageIndex + 1);
  }


}
