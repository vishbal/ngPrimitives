import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hb-email',
  templateUrl: './email.component.html',
  styleUrls: ['../styles.scss']
})
export class EmailComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label? = '';
  @Input() placeholder? = '';
  @Input() required?: boolean = false;
  @Input() inputGroup?: boolean;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  handleChange(event: any) {
    this.onChange.emit(event);
  }

  handleBlur(event: any) {
    this.onBlur.emit(event);
  }
}
