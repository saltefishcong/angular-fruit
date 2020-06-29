import { Component, OnInit } from '@angular/core';
import {SmsServiceService} from '../sms-service.service';
import {SmsFormTitle} from '../smsObject';

@Component({
  selector: 'app-sms-form',
  templateUrl: './sms-form.component.html',
  styleUrls: ['./sms-form.component.css']
})
export class SmsFormComponent implements OnInit {
  sms: SmsFormTitle = {
    phone: '',
    code: ''
  };
  constructor(private smsService: SmsServiceService) { }

  ngOnInit(): void {
  }
  sendSmsCode(): void {
    this.smsService.sendSmsCode(this.sms.phone);
  }
  getJwtToken(): void {
    this.smsService.getJwtToken(this.sms.phone, this.sms.code);
  }
}
