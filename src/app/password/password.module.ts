import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordFormComponent } from './password-form/password-form.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [PasswordFormComponent],
  exports: [
    PasswordFormComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class PasswordModule { }
