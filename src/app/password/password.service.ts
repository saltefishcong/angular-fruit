import { Injectable } from '@angular/core';
import {SmsServiceService} from '../sms/sms-service.service';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import * as globals from '../share/share-object';
import {ShareFunctionService} from '../share/share-function.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private smsService: SmsServiceService, private http: HttpClient, private shareFunctionService: ShareFunctionService) { }
  getJwtToken(name: string, pass: string): void {
     const param = {
        username: name,
        password: pass,
        scope: globals.ShareObject.passwordObject.scope,
        grant_type: globals.ShareObject.passwordObject.grant_type
     };
     const header = new HttpHeaders({
       // tslint:disable-next-line:max-line-length
       Authorization: 'Basic ' + btoa(globals.ShareObject.passwordObject.passwordClientId + ':' + globals.ShareObject.passwordObject.passwordClientSecret)
     });
    // tslint:disable-next-line:max-line-length
     this.http.post(globals.ShareObject.passwordObject.passwordTokenUrl, {}, {responseType: 'json', headers: header, params: param}).subscribe((data: any) => {
          this.shareFunctionService.setToken(data.access_token, 'password');
     });
  }
}
