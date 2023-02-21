import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss', '../../common/styles.scss']
})
export class CheckboxComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label? = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() data?: {label: string, value: any, active?: boolean}[];
  @Input() direction?: string = 'vertical';
  @Input() containerClass?: string = '';
  @Input() checkboxClass?: string = '';
}
