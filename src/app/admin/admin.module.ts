import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, ListarClientesComponent, DetalhesClienteComponent]
})
export class AdminModule { }
