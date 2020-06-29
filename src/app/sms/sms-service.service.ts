import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {ShareFunctionService} from '../share/share-function.service';
import {ShareObjectService} from '../share/share-object.service';
import * as globals from '../share/share-object';

@Injectable({
  providedIn: 'root'
})
export class SmsServiceService {
  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private shareFunction: ShareFunctionService, private shareObjectService: ShareObjectService) { }
  sendSmsCode(formPhone: string): void {
    const param = {phone: formPhone};
    this.http.get(globals.ShareObject.smsObject.smsCodeUrl, {params: param , responseType: 'text'}).subscribe((value: string) => {
        console.log(value);
    });
  }
  getJwtToken(phoneI: string, code: string): void {
    const param = {phone: phoneI ,
      smsCode: code,
      scope: globals.ShareObject.smsObject.scope,
      grant_type: globals.ShareObject.smsObject.grant_type
    };
    const header = new HttpHeaders( {
      Authorization: 'Basic ' + btoa(globals.ShareObject.smsObject.smsClientId + ':' + globals.ShareObject.smsObject.smsClientSecret)
    });
    // tslint:disable-next-line:max-line-length
    this.http.post(globals.ShareObject.smsObject.smsTokenUrl, {}, {headers: header, responseType: 'text', params: param}).subscribe((value: string) => {
      console.log(value);
      this.shareFunction.setToken(value, 'sms');
    });
  }

}

