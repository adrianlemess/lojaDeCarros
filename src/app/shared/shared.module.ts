import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './components/topo/topo.component';
import { CardComponent } from './components/card/card.component';
import { SecaoComponent } from './components/secao/secao.component';
import { Tela404Component } from './components/tela404/tela404.component';
import { RouterModule } from '@angular/router';
import { ErrosFormComponent } from './components/erros-form/erros-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopoComponent,
    CardComponent,
    SecaoComponent,
    Tela404Component,
    ErrosFormComponent
  ],
  exports: [
    // Components
    TopoComponent,
    CardComponent,
    SecaoComponent,
    Tela404Component,
    ErrosFormComponent
  ]
})
export class SharedModule { }
