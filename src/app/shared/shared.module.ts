import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './components/topo/topo.component';
import { CardComponent } from './components/card/card.component';
import { SecaoComponent } from './components/secao/secao.component';
import { Tela404Component } from './components/tela404/tela404.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopoComponent,
    CardComponent,
    SecaoComponent,
    Tela404Component
  ],
  exports: [
    // Components
    TopoComponent,
    CardComponent,
    SecaoComponent,
    Tela404Component
  ]
})
export class SharedModule { }
