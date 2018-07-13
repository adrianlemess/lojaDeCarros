import { VeiculoModule } from './veiculo.module';

describe('VeiculoModule', () => {
  let veiculoModule: VeiculoModule;

  beforeEach(() => {
    veiculoModule = new VeiculoModule();
  });

  it('should create an instance', () => {
    expect(veiculoModule).toBeTruthy();
  });
});
