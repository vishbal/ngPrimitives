import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hb-textinput',
  templateUrl: './textinput.component.html',
  styles: [`
    .p-inputtext.ng-dirty.ng-invalid {
      border-color: #B00020!important;
    }
  `]
})
export class TextinputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label? = '';
  @Input() placeholder? = '';
  @Input() required?: boolean = false;
  @Input() inputGroup?: boolean;
  @Input() isPassword?: boolean = false;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  handleChange(event: any) {
    this.onChange.emit(event);
  }

  handleBlur(event: any) {
    this.onBlur.emit(event);
  }
}
