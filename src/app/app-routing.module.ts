import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { CadastrarClienteComponent } from './authentication/cadastrar-cliente/cadastrar-cliente.component';
import { Tela404Component } from './tela404/tela404.component';
import { VeiculoModule } from './veiculo/veiculo.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastrar-cliente',
    component: CadastrarClienteComponent
  },
  {
    path: 'veiculos',
    loadChildren: './veiculo/veiculo.module#VeiculoModule'
  },
  {
    path: '**',
    component: Tela404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
