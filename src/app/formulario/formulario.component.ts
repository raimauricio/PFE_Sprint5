import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from '../interface/perfil.module';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  aceite = false;
  pass = 'visibility';
  typePass = 'password';
  email! : string
  senha!: string;
  perfis: Perfil[] = [{email:'user@brq.com.br', senha:'123456'},{email:'adm@brq.com.br', senha:'123456'}];
  @Input() termos!: boolean;
  @Input() formButton = "";

  constructor() { }

  ngOnInit(): void {
  }

  verSenha(){

    if(this.pass == 'visibility'){

      this.pass = 'visibility_off';
      this.typePass = 'text'

    }else{

      this.pass='visibility';
      this.typePass = 'password'

    }
  }

  executar(){

    if(this.formButton == 'Cadastre-se'){
      if(this.aceite){
        this.perfis.push(
          {email: this.email, senha: this.senha}
        );
        alert('Usuario Cadastrado !');
        console.log(this.perfis);
        this.email = "";
        this.senha = "";
      }else{
        alert('Aceite os termos para se cadastrar!');
      }
           
    }
    
    if(this.formButton == 'Entrar'){
      let logado = false;
      for(let i in this.perfis){
        if(this.email === this.perfis[i].email){
          if(this.senha === this.perfis[i].senha){
            alert('Usuário logado');
            logado = true;
          }
        }
      }
      if(!logado){
        alert('Falha na autenticação!');
      }

      this.email = "";
      this.senha = "";
    }
  } 

}
