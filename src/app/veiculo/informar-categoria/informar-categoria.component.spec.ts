import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarCategoriaComponent } from './informar-categoria.component';

describe('InformarCategoriaComponent', () => {
  let component: InformarCategoriaComponent;
  let fixture: ComponentFixture<InformarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
