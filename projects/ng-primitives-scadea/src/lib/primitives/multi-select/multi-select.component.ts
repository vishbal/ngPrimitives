import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hb-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss', '../../common/styles.scss']
})
export class MultiSelectComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label?: string = '';
  @Input() placeholder: string = '';
  @Input() required?: boolean = false;
  @Input() options: any[] = [];
  @Input() defaultLabel: string = '';
  @Input() optionLabel: string = '';
  @Input() optionValue: string = '';
  @Input() display?: string = '';
  @Input() optionDisabled: string = '';
  @Input() disabled: boolean = false;
  @Input() group: boolean = false;
  @Input() hidden: boolean = false;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  onChangeEvent(event: any) {
    this.onChange.emit(event);
  }
}
