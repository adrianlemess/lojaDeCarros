import { ValuesService } from './values.service';

fdescribe('Testa o values.service', () => {
  let service: ValuesService;

  beforeEach(() => {
    service = new ValuesService();
  });

  it('Deve retornar a frase \'hello world\' ao chamar getHelloWorld', () => {
    const resultado = service.getHelloWorld();
    expect(resultado).toContain('hello');
  });

  it('Deve retornar 4 ao passar 1 e 3 como parâmetros ao método somaValores()', () => {
    const resultadoSoma = service.somaValores(1, 3);
    expect(resultadoSoma).toEqual(4);
    expect(resultadoSoma).not.toBeNaN();

  });
});
