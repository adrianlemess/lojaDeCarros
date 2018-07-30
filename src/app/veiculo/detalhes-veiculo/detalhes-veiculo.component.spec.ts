import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVeiculoComponent } from './detalhes-veiculo.component';
import { SharedModule } from '../../shared/shared.module';

describe('DetalhesVeiculoComponent', () => {
  let component: DetalhesVeiculoComponent;
  let fixture: ComponentFixture<DetalhesVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ DetalhesVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
