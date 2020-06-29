import { Injectable } from '@angular/core';
import {LocalStorage} from '../app-object';

@Injectable({
  providedIn: 'root'
})
export class ShareFunctionService {

  constructor(private storage: LocalStorage) { }

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
}
