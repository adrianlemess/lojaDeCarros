import { MasterService } from './master.service';
import { ValuesService } from './values.service';

fdescribe('Testa o master.service', () => {
  let masterService: MasterService;

  it('Deve retornar o produto da multiplicação de 5 e 10 o ' +
  'método getProdutoDaMultiplicacaoDe5e10() chamando o serviço' +
  'real', () => {
    masterService = new MasterService(new ValuesService());
    expect(masterService.getProdutoDaMultiplicacaoDe5e10())
      .toEqual(50);
  });

  it('Deve retornar o produto da multiplicação de 5 e 10 o ' +
  'método getProdutoDaMultiplicacaoDe5e10() chamando um fake service', () => {
    const fake = { multiplicaValores(A, B) { return 50; }};
    masterService = new MasterService(fake as ValuesService);
    expect(masterService.getProdutoDaMultiplicacaoDe5e10())
      .toEqual(50);
  });

  it('Deve testar a funcao getProdutoDaMultiplicacaoDe5e10() com um spy', () => {
    const valuesService = new ValuesService();
    masterService = new MasterService(valuesService);
    spyOn(valuesService, 'multiplicaValores');

    masterService.getProdutoDaMultiplicacaoDe5e10();

    expect(valuesService.multiplicaValores).toHaveBeenCalled();
    expect(valuesService.multiplicaValores).toHaveBeenCalledWith(5, 10);
  });
});
