import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { CadastrarUsuarioComponent } from './authentication/cadastrar-usuario/cadastrar-usuario.component';
import { Tela404Component } from './shared/components/tela404/tela404.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './veiculo/home/home.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/guards/auth.guard';

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
    path: 'cadastrar-usuario',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'veiculos',
    loadChildren: './veiculo/veiculo.module#VeiculoModule'  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '**',
    component: Tela404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationModule,
    SharedModule,
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
