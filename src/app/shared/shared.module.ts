import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './components/topo/topo.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopoComponent,
    SectionComponent,
    CardComponent],
  exports: [
    TopoComponent,
    SectionComponent,
    CardComponent]
})
export class SharedModule { }
