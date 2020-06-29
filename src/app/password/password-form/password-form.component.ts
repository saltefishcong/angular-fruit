import { Component, OnInit } from '@angular/core';
import {PasswordService} from '../password.service';
import {Passowrdformobject} from '../passowrd-form-object';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {

  user: Passowrdformobject = {
    username: '',
    password: ''
  };
  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
  }

  getJwtToken(): void{
    this.passwordService.getJwtToken(this.user.username, this.user.password);
  }
}
