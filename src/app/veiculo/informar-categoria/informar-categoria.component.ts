import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { categoriaEnum } from '../../shared/models';

@Component({
  selector: 'app-informar-categoria',
  templateUrl: './informar-categoria.component.html',
  styleUrls: ['./informar-categoria.component.scss']
})
export class InformarCategoriaComponent implements OnInit {

  constructor(private _router: Router) { }
  public categorias = categoriaEnum;

  ngOnInit() {
  }
}
