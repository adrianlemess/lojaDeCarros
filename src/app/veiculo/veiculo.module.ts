import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InformarCategoriaComponent } from './informar-categoria/informar-categoria.component';
import { ListarVeiculosComponent } from './listar-veiculos/listar-veiculos.component';
import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { DetalhesVeiculoComponent } from './detalhes-veiculo/detalhes-veiculo.component';
import { VeiculoRoutingModule } from './veiculo-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    VeiculoRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, InformarCategoriaComponent, ListarVeiculosComponent, CadastrarVeiculoComponent, DetalhesVeiculoComponent]
})
export class VeiculoModule { }
