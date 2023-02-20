import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './primeng.module';
import { TextinputComponent } from './textinput/textinput.component';
import { EmailComponent } from './email/email.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { TextareaComponent } from './textarea/textarea.component';
import { DynamicPipePipe } from './dynamic-pipe.pipe';



@NgModule({
  declarations: [
    TextinputComponent,
    EmailComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareaComponent,
    DropdownComponent,
    MultiSelectComponent,
    AutoCompleteComponent,
    GridComponent,
    DynamicPipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    TextinputComponent,
    EmailComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareaComponent,
    DropdownComponent,
    MultiSelectComponent,
    AutoCompleteComponent,
    GridComponent,
    DynamicPipePipe
  ],
  providers: [DatePipe, CurrencyPipe]
})
export class PrimitivesModule { }
