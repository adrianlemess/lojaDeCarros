import { Component, OnInit, Input } from '@angular/core';
import { mensagemErros } from './erros-mensagens';

@Component({
  selector: 'app-erros-form',
  templateUrl: './erros-form.component.html',
  styleUrls: ['./erros-form.component.scss']
})
export class ErrosFormComponent implements OnInit {
  @Input()
  public erros: any[] = [];

  constructor() { }

  ngOnInit() {
    console.log('onInit', this.erros);
  }

  getMensagensDeErro(erro) {
    const index = Object.keys(erro)[0];
    return mensagemErros[index] || erro.value;
  }

}
