import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsFormComponent } from './sms-form/sms-form.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [SmsFormComponent],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    SmsFormComponent
  ]
})
export class SmsModule { }
