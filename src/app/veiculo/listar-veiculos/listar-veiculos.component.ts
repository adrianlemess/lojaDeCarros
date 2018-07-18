import { Component, OnInit } from '@angular/core';
import { RouterState, RouterLinkActive, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.scss']
})
export class ListarVeiculosComponent implements OnInit {

  constructor(
    private _routerActivated: ActivatedRoute
  ) { }

  ngOnInit() {
    this._routerActivated.queryParams
      .subscribe(data => console.log(data));
  }

  onEditar(id: number) {
    console.log('onEditar', id);
  }

  onComprar(id: number) {
    console.log('onComprar', id);
  }
}
