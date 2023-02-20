import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hb-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['../styles.scss']
})
export class AutoCompleteComponent  {
  @Input() control: FormControl = new FormControl();
  @Input() label?: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() options: any[] = [];
  @Input() field = '';
  @Input() showEmptyMessage = true;
  @Input() emptyMessage = '';
  @Input() requiredValidationError = 'This field is required'

  text: any;
  filteredValues: any[] = [];

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  onChangeEvent(event: any) {
    this.onChange.emit(event);  
  }

  search(event: any) {
   this.filteredValues = this.options.filter(o => o[this.field]?.toLowerCase().startsWith(event.query.toLowerCase()));
} 

}
