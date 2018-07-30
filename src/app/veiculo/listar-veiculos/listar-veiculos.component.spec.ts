import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVeiculosComponent } from './listar-veiculos.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListarVeiculosComponent', () => {
  let component: ListarVeiculosComponent;
  let fixture: ComponentFixture<ListarVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes([]),
      HttpClientTestingModule],
      declarations: [ ListarVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
