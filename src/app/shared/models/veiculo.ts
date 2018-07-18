export interface IVeiculo {
  id?: number;
  marca: string;
  modelo: string;
  ano: number;
  categoria: string;
}

export interface IVeiculoPraVenda extends IVeiculo {
  imagemUrl: string;
  valor: number;
  unidadesEmEstoque: number;
}

export interface IVeiculoComprado extends IVeiculo {
  dataCompra: string;
  placa: string;
}

export class Veiculo implements IVeiculo {
  public id?: number;
  public marca: string;
  public modelo: string;
  public ano: number;
  public categoria: string;


  constructor(veiculo: IVeiculo) {
    this.id = veiculo.id;
    this.marca = veiculo.marca;
    this.modelo = veiculo.modelo;
    this.ano = veiculo.ano;
    this.categoria = veiculo.categoria;
  }

  get Titulo() {
    return `${this.marca} - ${this.modelo} - ${this.ano}`;

  }
}

export class VeiculoParaVenda extends Veiculo implements IVeiculoPraVenda {
  public imagemUrl: string;
  public valor: number;
  public unidadesEmEstoque: number;

  constructor(veiculoParaVenda: IVeiculoPraVenda ) {
    super(veiculoParaVenda);
    this.imagemUrl = veiculoParaVenda.imagemUrl;
    this.valor = veiculoParaVenda.valor;
    this.unidadesEmEstoque = veiculoParaVenda.unidadesEmEstoque;
  }

  diminuirUnidadeEmEstoquePorUnidade() {
    if (this.unidadesEmEstoque === 0) {
      throw new Error('Veículo não está mais disponível para compra');
    }
    this.unidadesEmEstoque -= 1;
  }
}

export class VeiculoComprado extends Veiculo implements VeiculoComprado {
  dataCompra: string;
  placa: string;

  constructor(veiculoComprado: Veiculo, placa: string) {
    super(veiculoComprado);
    this.dataCompra = this.getDataAtual();
    this.placa = placa;
  }

  private getDataAtual(): string {
    const dataAtual = new Date();
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março',
      'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro',
      'Novembro', 'Dezembro'
    ];

    const day = dataAtual.getDate();
    const monthIndex = dataAtual.getMonth();
    const year = dataAtual.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
}
