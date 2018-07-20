import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformarCategoriaComponent } from './informar-categoria/informar-categoria.component';
import { DetalhesVeiculoComponent } from './detalhes-veiculo/detalhes-veiculo.component';
import { ListarVeiculosComponent } from './listar-veiculos/listar-veiculos.component';
import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { AuthGuard } from '../services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'informar-categoria',
        pathMatch: 'full'
      },
      {
        path: 'informar-categoria',
        component: InformarCategoriaComponent
      },
      {
        path: 'detalhes/:id',
        component: DetalhesVeiculoComponent
      },
      {
        path: 'listar',
        component: ListarVeiculosComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarVeiculoComponent
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
export class VeiculoRoutingModule {}
