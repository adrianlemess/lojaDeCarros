import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVeiculoComponent } from './cadastrar-veiculo.component';
import { SharedModule } from '../../shared/shared.module';

describe('CadastrarVeiculoComponent', () => {
  let component: CadastrarVeiculoComponent;
  let fixture: ComponentFixture<CadastrarVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ CadastrarVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
