import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hb-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss', '../../common/styles.scss']
})
export class TextareaComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label? = '';
  @Input() placeholder? = '';
  @Input() required?: boolean = false;
  @Input() autoResize: boolean = false;
  @Input() rows?: string = '';
  @Input() cols?: string = '';
}
