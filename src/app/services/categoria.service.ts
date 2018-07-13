import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { ICategoria, Categoria, categoriaEnum } from '../shared/models/categoria';
import { IVeiculo } from '../shared/models';
import { HttpBase } from './http-base';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends HttpBase {

  constructor(private _httpClient: HttpClient) {
    super('categorias');
  }

  getCategoriasVeiculos(): Observable<Categoria[]> {
    return this._httpClient.get<Categoria[]>(`${this.UrlBase}/`)
      .pipe(
        take(1),
        map((categorias: ICategoria[]) => {
          return categorias.map(categoria => new Categoria(categoria));
        }));
  }
}
