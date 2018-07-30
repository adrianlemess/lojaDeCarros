import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientesComponent } from './listar-clientes.component';
import { SharedModule } from '../../shared/shared.module';

describe('ListarClientesComponent', () => {
  let component: ListarClientesComponent;
  let fixture: ComponentFixture<ListarClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ ListarClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
