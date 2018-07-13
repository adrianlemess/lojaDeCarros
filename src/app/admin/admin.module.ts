import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetalhesClienteComponent, ListarClientesComponent]
})
export class AdminModule { }
