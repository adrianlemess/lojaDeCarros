import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/models';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;
  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario({
      email: '',
      password: ''
    });
  }

  fazerLogin(formulario: NgForm) {
    console.log(formulario.value);
  }
}
