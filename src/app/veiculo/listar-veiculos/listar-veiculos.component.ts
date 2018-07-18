import { Component, OnInit } from '@angular/core';
import { RouterState, RouterLinkActive, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo, categoriaEnum, VeiculoParaVenda } from '../../shared/models';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.scss']
})
export class ListarVeiculosComponent implements OnInit {
  public veiculos: VeiculoParaVenda[] = [];
  public tipoVeiculo: categoriaEnum;

  constructor(
    private _routerActivated: ActivatedRoute,
    private _veiculosService: VeiculoService
  ) { }

  ngOnInit() {
    this._routerActivated.queryParams
      .subscribe(data => {
        this.tipoVeiculo = data.tipoVeiculo;
        this.getVeiculos(this.tipoVeiculo);
      });

  }

  getVeiculos(tipoVeiculo: categoriaEnum) {
    return this._veiculosService.getVeiculos(tipoVeiculo)
      .subscribe((dado: VeiculoParaVenda[]) => {
        this.veiculos = dado;
        console.log(this.veiculos);
      });
  }

  onEditar(id: number) {
    console.log('onEditar', id);
  }

  onComprar(id: number) {
    console.log('onComprar', id);
  }
}
