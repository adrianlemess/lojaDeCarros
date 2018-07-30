import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesClienteComponent } from './detalhes-cliente.component';
import { SharedModule } from '../../shared/shared.module';

describe('DetalhesClienteComponent', () => {
  let component: DetalhesClienteComponent;
  let fixture: ComponentFixture<DetalhesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ DetalhesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
