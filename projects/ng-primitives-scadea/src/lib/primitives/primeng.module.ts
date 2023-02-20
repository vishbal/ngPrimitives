import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { CaptchaModule } from 'primeng/captcha';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {BadgeModule} from 'primeng/badge';
import {PasswordModule} from 'primeng/password';
import {ChipsModule} from 'primeng/chips';
import {ProgressBarModule} from 'primeng/progressbar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    StepsModule,
    ToastModule,
    CheckboxModule,
    TabViewModule,
    CaptchaModule,
    CarouselModule,
    DropdownModule,
    InputNumberModule,
    TableModule,
    SplitButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    MultiSelectModule,
    CalendarModule,
    DialogModule,
    BadgeModule,
    PasswordModule,
    ChipsModule,
    ProgressBarModule,
    AutoCompleteModule,
    FieldsetModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    StepsModule,
    ToastModule,
    CheckboxModule,
    TabViewModule,
    CaptchaModule,
    CarouselModule,
    DropdownModule,
    InputNumberModule,
    TableModule,
    SplitButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    MultiSelectModule,
    CalendarModule,
    DialogModule,
    BadgeModule,
    PasswordModule,
    ChipsModule,
    ProgressBarModule,
    AutoCompleteModule,
    FieldsetModule
  ],
  providers: [MessageService]
})
export class PrimeNgModule { }
