import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformarCategoriaComponent } from './informar-categoria/informar-categoria.component';
import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { DetalhesClienteComponent } from '../admin/detalhes-cliente/detalhes-cliente.component';
import { DetalhesVeiculoComponent } from './detalhes-veiculo/detalhes-veiculo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
        path: 'cadastrar-veiculo',
        component: CadastrarVeiculoComponent
      },
      {
        path: 'detalhes',
        component: DetalhesVeiculoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class VeiculoRoutingModule {
}
