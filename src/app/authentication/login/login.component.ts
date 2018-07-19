import { Component, OnInit } from '@angular/core';
import { Usuario, IUsuario, PerfilUsuarioEnum } from '../../shared/models';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;
  constructor(
    private _usuarioService: UsuarioService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuario = new Usuario({
      email: '',
      password: ''
    });
  }

  fazerLogin(formulario: NgForm) {
    this._usuarioService.loginUsuario(formulario.value.email, formulario.value.password)
      .subscribe(usuario => {
        if (usuario) {
          const novoUsuario = new Usuario(usuario);
          this.salvaUsuarioLogado(novoUsuario);
        } else {
          alert('Usuário não encontrado');
        }
      });
  }

  salvaUsuarioLogado(usuario: Usuario) {
    this._authService.setCurrentUser(usuario);
    if (usuario.perfil === PerfilUsuarioEnum.ADMINISTRADOR) {
      this._router.navigate(['/admin']);
    } else {
      this._router.navigate(['/veiculos']);
    }
  }
}
