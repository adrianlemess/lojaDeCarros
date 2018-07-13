import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InformarCategoriaComponent } from './informar-categoria/informar-categoria.component';
import { ListagemVeiculosComponent } from './listagem-veiculos/listagem-veiculos.component';
import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { DetalhesVeiculoComponent } from './detalhes-veiculo/detalhes-veiculo.component';
import { VeiculoRoutingModule } from './veiculo-routing.module';

@NgModule({
  imports: [
    VeiculoRoutingModule,
    CommonModule
  ],
  declarations: [HomeComponent, InformarCategoriaComponent, ListagemVeiculosComponent, CadastrarVeiculoComponent, DetalhesVeiculoComponent]
})
export class VeiculoModule { }
