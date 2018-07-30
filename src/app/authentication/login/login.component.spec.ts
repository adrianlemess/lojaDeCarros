import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { RouterOutletStubComponent, RouterLinkStubDirective } from '../../shared/testing/router-stubs';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        RouterOutletStubComponent,
        RouterLinkStubDirective,
        LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
