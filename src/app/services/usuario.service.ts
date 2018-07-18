import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { IUsuario, PerfilUsuarioEnum, Usuario, VeiculoComprado } from '../shared/models';
import { HttpBase } from './http-base';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends HttpBase {

  constructor(private _httpClient: HttpClient) {
    super('usuarios');
  }

  loginUsuario(email: string, password: string): Observable<IUsuario> {
    return this._httpClient.get<IUsuario>(
      `${this.UrlBase}?email=${email}&password=${password}`)
      .pipe(
        take(1),
        map((usuario: IUsuario) => {
          return new Usuario(usuario);
        }));
  }

  getUsuarios(): Observable<IUsuario[]> {
    return this._httpClient.get<IUsuario[]>(
      `${this.UrlBase}?perfil=${PerfilUsuarioEnum.CLIENTE}`)
      .pipe(
        take(1),
        map((usuarios: IUsuario[]) => {
          return usuarios.map(usuario => new Usuario(usuario));
        }));
  }

  // Uma boa prática é especificar entre back e front um objeto default de resposta para posts, puts e delete
  criarUsuario(usuario: Usuario): Observable<any> {
    return this._httpClient.post<any>(
      `${this.UrlBase}`, usuario);
  }

  setVeiculoCompradoPorCliente(usuario: Usuario, veiculoComprado: VeiculoComprado) {
    usuario.VeiculosComprados = veiculoComprado;
    return this._httpClient.put<Usuario>(
      `${this.UrlBase}/${usuario.id}`, usuario);
  }
}
