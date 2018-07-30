import { ValuesService } from './values.service';

fdescribe('Testa o values.service', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });
  it('Deve retornar a frase \'hello world\' ao chamar getHelloWorld', () => {
    const service = new ValuesService();
    const resultado = service.getHelloWorld();
    expect(resultado).toEqual('hello world');
  });

  it('Deve retornar 4 ao passar 1 e 3 como parâmetros ao método somaValores()', () => {
    const service = new ValuesService();
    const resultadoSoma = service.somaValores(1, 3);
    expect(resultadoSoma).toEqual(4);
  });
});
