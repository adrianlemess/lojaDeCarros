import { IVeiculoComprado } from './veiculo';

export interface IUsuario {
  id: number;
  perfil: PerfilUsuarioEnum;
  nome: string;
  email: string;
  password: string;
  veiculosComprados: IVeiculoComprado[];
}

export enum PerfilUsuarioEnum {
  ADMINISTRADOR = 'administrador',
  CLIENTE = 'cliente'
}

export class Usuario implements IUsuario {
  public id: number;
  public perfil: PerfilUsuarioEnum;
  public nome: string;
  public email: string;
  public password: string;
  public veiculosComprados: IVeiculoComprado[];

  constructor(usuario: IUsuario) {
    this.id = usuario.id;
    this.perfil = usuario.perfil;
    this.password = usuario.password;
    this.email = usuario.email;
    this.nome = usuario.nome;
    this.veiculosComprados = usuario.veiculosComprados || [];
  }

  set VeiculosComprados(veiculo: IVeiculoComprado) {
    this.veiculosComprados = [...this.veiculosComprados, veiculo];
  }
}
