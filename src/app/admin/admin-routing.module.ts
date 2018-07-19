import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';
import { AuthGuard } from '../services/guards/auth.guard';
import { AdminGuard } from '../services/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: ListarClientesComponent
      },
      {
        path: 'detalhes',
        component: DetalhesClienteComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule {}
