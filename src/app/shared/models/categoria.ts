export interface ICategoria {
  id: number;
  descricao: string;
  nome: string;
}

export class Categoria implements ICategoria {
  public id: number;
  public nome: string;
  public descricao: string;

  constructor(
    public categoria: ICategoria
  ) {
    this.id = categoria.id;
    this.nome = categoria.nome;
    this.descricao = categoria.descricao;
  }
}

export enum categoriaEnum {
  MOTO = 'moto',
  CARRO = 'carro',
  CAMINHAO = 'caminhao'
}
