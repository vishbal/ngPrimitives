import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss', '../../common/styles.scss']
})
export class DropdownComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label?: string = '';
  @Input() placeholder: string = '';
  @Input() required?: boolean = false;
  @Input() options: any[] = [];
  @Input() showClear: boolean = true;
  @Input() optionLabel: string = '';
  @Input() optionValue: string = '';
  @Input() optionDisabled: string = '';
  @Input() group: boolean = false;
  @Input() disabled: boolean = false;
  @Input() hidden: boolean = false;
  @Input() filter: boolean = false;
  @Input() showItemIcon: boolean = false;
  @Input() iconSrc: string = '';

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  onChangeEvent(event: any) {
    this.onChange.emit(event);
  }
}
