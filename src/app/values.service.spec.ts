import { ValuesService } from './values.service';

fdescribe('Testa o values.service', () => {
  let service: ValuesService;

  beforeEach(() => {
    service = new ValuesService();
  });

  it('Deve retornar o maior numero sendo 7 e o menor 3 quando passado os valores 3, 4, 5, 6, 7', () => {
    service.buscaMaiorEMenorNumero([3, 4, 5, 6, 7]);
    expect(service.getMaiorNumero()).toEqual(7);
    expect(service.getMenorNumero()).toEqual(3);
  });

  it('Deve retornar o maior numero sendo 7 e o menor 1 quando passado os valores 3, 4, 5, 6, 7', () => {
    service.buscaMaiorEMenorNumero([7, 6, 5, 4, 3, 2, 1]);
    expect(service.getMaiorNumero()).toEqual(7);
    expect(service.getMenorNumero()).toEqual(1);
  });

  it('Deve retornar 6 ao passar 2 e 3 como parâmetros ao método somaValores()', () => {
    const resultadoSoma = service.multiplicaValores(2, 3);
    expect(resultadoSoma).toEqual(6);
    expect(resultadoSoma).not.toBeNaN();

  });
});
