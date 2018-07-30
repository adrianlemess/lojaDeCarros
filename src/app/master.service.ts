import { Injectable } from '@angular/core';
import { ValuesService } from './values.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(public valuesService: ValuesService) {

  }

  getProdutoDaMultiplicacaoDe5e10() {
    return this.valuesService.multiplicaValores(5, 10);
  }
}
