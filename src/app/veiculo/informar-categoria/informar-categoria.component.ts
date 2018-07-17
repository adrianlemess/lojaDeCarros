import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-informar-categoria',
  templateUrl: './informar-categoria.component.html',
  styleUrls: ['./informar-categoria.component.scss']
})
export class InformarCategoriaComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navegarParaListagem() {
    this._router.navigate(['/veiculos', 'listar'], {
      queryParams: { msg: 'olá'}
    });
  }
}
