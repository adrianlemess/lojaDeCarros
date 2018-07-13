import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemVeiculosComponent } from './listagem-veiculos.component';

describe('ListagemVeiculosComponent', () => {
  let component: ListagemVeiculosComponent;
  let fixture: ComponentFixture<ListagemVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
