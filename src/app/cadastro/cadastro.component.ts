import { Component, Input, OnInit} from '@angular/core';
import { Perfil } from '../interface/perfil.module';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  
  email!: string;
  senha!: string; 

  constructor() { }

  ngOnInit(): void {

  }

}
