import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoComponent } from './topo.component';
import { SharedModule } from '../../shared.module';
import { RouterTestingModule } from '../../../../../node_modules/@angular/router/testing';

describe('TopoComponent', () => {
  let component: TopoComponent;
  let fixture: ComponentFixture<TopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
