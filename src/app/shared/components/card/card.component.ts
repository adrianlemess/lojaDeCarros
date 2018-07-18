import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public id: number;

  @Input()
  public titulo: string;

  @Input()
  public valor: number;

  @Input()
  public unidadesEmEstoque: number;

  @Input()
  public imagemUrl: string;

  @Output()
  public editar = new EventEmitter<number>();

  @Output()
  public comprar = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  onEditar() {
    this.editar.emit(this.id);
  }

  onComprar() {
    this.comprar.emit(this.id);
  }

}
