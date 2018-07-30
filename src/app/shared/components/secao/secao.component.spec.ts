import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoComponent } from './secao.component';
import { SharedModule } from '../../shared.module';

describe('SecaoComponent', () => {
  let component: SecaoComponent;
  let fixture: ComponentFixture<SecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
