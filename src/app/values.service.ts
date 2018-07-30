import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor() { }

  getHelloWorld() {
    return 'hello world';
  }

  somaValores(A, B) {
    return A + B;
  }
}
