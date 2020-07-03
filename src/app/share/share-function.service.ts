import { Injectable } from '@angular/core';
import {LocalStorage} from '../app-object';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import * as globals from '../share/share-object';

@Injectable({
  providedIn: 'root'
})
export class ShareFunctionService {

  constructor(private storage: LocalStorage, private http: HttpClient) { }

  public setStringLocalStorage(key: string, value: string): void {
    this.storage.set(key, value);
  }

  public getStringLocalStorage(key: string): string {
    return this.storage.get(key);
  }

  public setAnyLocalStorage(key: string, value: any): void {
    this.storage.setObject(key, value);
  }

  public getAnyLocalStorage(key: string): any {
    return this.storage.getObject(key);
  }

  public remove(key: string): any {
    this.storage.remove(key);
  }

  public setToken(value: any, type: string): void{
    const tokens: any = {};
    tokens.type = type;
    tokens.token = value;
    this.setAnyLocalStorage('token', tokens);
  }

  public refreshToken(token: any, clientId: string , clientSecret: string, type: string): void{
    this.remove('token');
    const param = {
      grant_type: globals.ShareObject.refreshTokenObject.grant_type,
      refresh_token: token
    };
    const header = new HttpHeaders( {
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret)
    });
    this.http.post(globals.ShareObject.refreshTokenObject.refreshTokenUrl, {}  , {params: param, headers: header, responseType: 'json'})
      .subscribe((data: any) => {
         this.setToken(data.access_token, type);
      });
  }
}
