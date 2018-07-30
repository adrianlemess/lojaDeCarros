import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosFormComponent } from './erros-form.component';

describe('ErrosFormComponent', () => {
  let component: ErrosFormComponent;
  let fixture: ComponentFixture<ErrosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
