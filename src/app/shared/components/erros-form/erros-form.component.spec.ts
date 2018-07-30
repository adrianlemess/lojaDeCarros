import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosFormComponent } from './erros-form.component';
import { SharedModule } from '../../shared.module';

describe('ErrosFormComponent', () => {
  let component: ErrosFormComponent;
  let fixture: ComponentFixture<ErrosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ ]
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
