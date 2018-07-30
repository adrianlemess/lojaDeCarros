import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarCategoriaComponent } from './informar-categoria.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';

describe('InformarCategoriaComponent', () => {
  let component: InformarCategoriaComponent;
  let fixture: ComponentFixture<InformarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes([])],
      declarations: [ InformarCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
