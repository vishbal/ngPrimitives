import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'hb-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss', '../../common/styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent {
  @Input() data: any[] = [];
  @Input() headerColumns: any[] = [];
  @Input() paginator: boolean = false;
  @Input() rows: number = 10;
  @Input() filterable: boolean = true;
  @Input() filtersRow: boolean = false;
  @Input() selectionMode: string = '';
  @Input() globalFilterOptions: Array<string> = [];
  @Input() enableCheckboxSelection: boolean = false;
  @ViewChild('dt1') tableRef?: Table;
  @Input() actions: boolean = false;
  @Input() editAction: boolean = false;
  @Input() editActionIcon: any = '';

  @Output('checkboxSelectionEvent') itemSelection = new EventEmitter<any>();
  @Output('rowSelectEvent') onRowClickEvent = new EventEmitter<any>();
  @Output('actionEvents') onActionEvents = new EventEmitter<any>();

  selectedItems: any[] = [];

  onRowClick() {
    this.onRowClickEvent.emit(this.selectedItems);
  }

  handleGlobalFilter(event: any) {
    this.tableRef?.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onRowSelect(event: any) {
    this.itemSelection.emit(event.data);
  }

  onRowUnSelect(event: any) {
    this.itemSelection.emit(event.data);
  }

  onHeaderCheckboxClicked(event: any) {
    this.itemSelection.emit(this.selectedItems);
  }

  onActionClick(type: string, data: any) {
    this.onActionEvents.emit({
      action: type,
      data
    });
  }
}
