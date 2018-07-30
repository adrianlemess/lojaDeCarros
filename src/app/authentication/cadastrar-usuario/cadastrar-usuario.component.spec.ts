import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarUsuarioComponent } from './cadastrar-usuario.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutletStubComponent, RouterLinkStubDirective } from '../../shared/testing/router-stubs';

describe('CadastrarUsuarioComponent', () => {
  let component: CadastrarUsuarioComponent;
  let fixture: ComponentFixture<CadastrarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        CadastrarUsuarioComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
