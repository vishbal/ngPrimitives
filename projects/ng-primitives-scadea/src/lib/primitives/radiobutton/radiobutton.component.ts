import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hb-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss', '../styles.scss']
})
export class RadiobuttonComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label? = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() radioData?: {label: string, value: any}[];
  @Input() direction?: string = 'vertical';
  @Input() containerClass?: string = '';
  @Input() radioClass?: string = '';
}
