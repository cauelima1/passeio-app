import { Component } from '@angular/core';
import { FormGroup, Validators, ControlValueAccessor, FormControl} from'@angular/forms';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-lugar-component',
  standalone: false,
  templateUrl: './lugar-component.html',
  styleUrl: './lugar-component.scss'
})
export class LugarComponent {
  camposForm: FormGroup;
  categorias: Categoria[] = [];


  constructor(){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  salvar (){
    console.log('usuario salvo', this.camposForm);
  }
}
