import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, CadastrarClienteComponent],
  exports: [LoginComponent, CadastrarClienteComponent],
})
export class AuthenticationModule { }
