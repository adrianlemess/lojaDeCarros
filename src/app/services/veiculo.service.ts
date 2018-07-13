import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map, distinctUntilChanged, retry, switchMap } from 'rxjs/operators';

import { ICategoria, Categoria, categoriaEnum } from '../shared/models/categoria';
import { VeiculoParaVenda, Veiculo, VeiculoComprado, Usuario } from '../shared/models';
import { HttpBase } from './http-base';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService extends HttpBase {

  constructor(private _httpClient: HttpClient, private usuarioService: UsuarioService) {
    super('veiculos');
  }

  getVeiculos(nomeCategoria: categoriaEnum): Observable<VeiculoParaVenda[]> {

    const parametros = new HttpParams()
      .set('categoria', nomeCategoria)
      .set('unidadesEmEstoque_gte', '1');

    return this._httpClient.get<VeiculoParaVenda[]>(
      `${this.UrlBase}`, {
        params: parametros
      })
      .pipe(
        take(1),
        retry(3),
        distinctUntilChanged(),
        map(
          (veiculos: VeiculoParaVenda[]) => {
            return veiculos.map(veiculo => {
              return new VeiculoParaVenda(veiculo);
            });
          }
        )
      )
      ;
  }

  getVeiculoById(idVeiculo: number): Observable<VeiculoParaVenda> {
    return this._httpClient.get<VeiculoParaVenda>(
      `${this.UrlBase}/${idVeiculo}`);
  }

  createVeiculo(veiculo: VeiculoParaVenda) {
    return this._httpClient.post<any>(
      `${this.UrlBase}`, veiculo
    );
  }

  editarVeiculo(veiculo: VeiculoParaVenda) {
    return this._httpClient.put<any>(
      `${this.UrlBase}/${veiculo.id}`, veiculo
    );
  }

  deletarVeiculo(idVeiculo: number) {
    return this._httpClient.delete<any>(
      `${this.UrlBase}/${idVeiculo}`
    );
  }

  private verificarDisponibilidadeVeiculo(idVeiculo: number): Observable<boolean> {
    return this.getVeiculoById(idVeiculo)
      .pipe(
        take(1),
        map((veiculo: VeiculoParaVenda) => {
          return veiculo.unidadesEmEstoque > 0;
        })
      );
  }

  private decrementarUnidadeVeiculoEmEstoque(veiculoParaVenda: VeiculoParaVenda, placa: string): Observable<VeiculoComprado> {
    veiculoParaVenda.diminuirUnidadeEmEstoquePorUnidade();
    return this._httpClient.put(`${this.UrlBase}/${veiculoParaVenda.id}`, veiculoParaVenda)
      .pipe(
        map(() => {
          const veiculoComprado = new VeiculoComprado({
            ...veiculoParaVenda
          } as Veiculo, placa);

          return veiculoComprado;
        })
      );
  }

  public comprarVeiculo(
    veiculoParaVenda: VeiculoParaVenda,
    usuario: Usuario,
    placa: string): Observable<Usuario> {
    return this.verificarDisponibilidadeVeiculo(veiculoParaVenda.id)
      .pipe(
        map((resposta: boolean) => {
          if (!resposta) {
            throw new Error('Esse veículo não possui mais unidades disponíveis');
          }
        }),
        switchMap(() => {
          return this.decrementarUnidadeVeiculoEmEstoque(veiculoParaVenda, placa);
        }),
        switchMap((veiculoComprado: VeiculoComprado) => {
          return this.usuarioService.setVeiculoCompradoPorCliente(usuario, veiculoComprado);
        }),
      );
  }

}
