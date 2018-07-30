import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors } from '../../../../node_modules/@angular/forms';
import { PerfilUsuarioEnum } from '../../shared/models';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }
  public usuarioForm: FormGroup;
  public arrayPerfis = [
    PerfilUsuarioEnum.ADMINISTRADOR,
    PerfilUsuarioEnum.CLIENTE
  ];
  ngOnInit() {
    this.inicializarFormulario();
    // Só para testar um possível pre carregamento de dados vindo de um serviço ok MAX?
    // this.carregarDados();
    // ValueChanges -> Escutar mudanças dinamicamente do formulario e tomar uma açao
    // this.usuarioForm.valueChanges

   // Escutar mudança de status e aplicar açao
    // this.usuarioForm.statusChanges
    //   .subscribe((status) => {
    //     if (status.IsValid) {
    //       // Chama a api
    //     }
    // });

  }

  inicializarFormulario() {
    this.usuarioForm =
      this._fb.group({
        perfil: [''],
        nome: ['', [
          Validators.required,
          Validators.minLength(10)
        ]],
        email: [''],
        password: [''],
        endereco: this._fb.group({
          rua: [''],
          numero: ['']
        })
      });
  }

  carregarDados() {
    this.usuarioForm.setValue({
      nome: 'Adrian',
      password: '',
      perfil: PerfilUsuarioEnum.ADMINISTRADOR,
      email: 'adrianlemess@gmail.com',
      endereco: {
        rua: '',
        numero: ''
      }
    });
  }

  atualizarCampo(nomeDoCampo, valor) {
    this.usuarioForm.patchValue({
      [nomeDoCampo]: valor
    });
  }

  onSubmit() {
    if (!this.usuarioForm.valid) {
      alert('campos inválidos');
    }

    console.log('erros por campo', this.usuarioForm.controls['nome'].errors);
    console.log('valores', this.usuarioForm.value);
    console.log('IsValid', this.usuarioForm.status);
  }

  getErrosPorCampo(formControlName) {
    return [this.usuarioForm.controls[formControlName]
      .errors];
  }
}
