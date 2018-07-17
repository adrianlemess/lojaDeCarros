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

  // http://localhost:4200/veiculos/listar?msg=ol%C3%A1

  ngOnInit() {
    this._routerActivated.url.subscribe((dados) => console.log(dados));
    this._routerActivated.queryParams
      .subscribe(data => console.log(data.msg));
  }
}
