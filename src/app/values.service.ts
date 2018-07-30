import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  private maiorNumero;
  private menorNumero;

  constructor() {
    this.maiorNumero = Number.MIN_VALUE;
    this.menorNumero = Number.MAX_VALUE;
  }

  buscaMaiorEMenorNumero(arrayDeNumeros: number[]) {
    arrayDeNumeros.forEach((numero: number) => {
      if (numero > this.maiorNumero) {
        this.maiorNumero = numero;
      }
      if (numero < this.menorNumero) {
        this.menorNumero = numero;
      }
    });
  }

  multiplicaValores(A, B) {
    return A * B;
  }

  getMaiorNumero() {
    return this.maiorNumero;
  }

  getMenorNumero() {
    return this.menorNumero;
  }

}
