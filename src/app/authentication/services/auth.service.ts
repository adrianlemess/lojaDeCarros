import { Injectable } from '@angular/core';
import { Usuario } from '../../shared/models';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogado: Usuario;

  constructor() {
    this.usuarioLogado = null;
  }

  getCurrentUser(): Usuario {
    let usuarioReturn = this.usuarioLogado;

    if (!usuarioReturn) {
      usuarioReturn = this.get() || null;
      this.setCurrentUser(usuarioReturn);
    }

    return usuarioReturn ? usuarioReturn : null;
  }

  isAuthenticated() {
    return !isNullOrUndefined(this.getCurrentUser());
  }

  setCurrentUser(usuario: Usuario) {
    this.usuarioLogado = usuario;
    this.save(usuario);
  }

  getProfile() {
    return this.usuarioLogado ? this.usuarioLogado.perfil : '';
  }

  private save(usuario: Usuario) {
    localStorage.setItem('currentUser', JSON.stringify(usuario));
  }

  private get(): Usuario {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  private remove() {
    localStorage.setItem('currentUser', null);
    localStorage.removeItem('currentUser');
  }
}
