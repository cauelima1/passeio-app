import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {
  camposForm: FormGroup;

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }


  salvar(){
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
    console.log("Valores digitados: ", this.camposForm.value);
    console.log("Está valido?", this.camposForm.valid);
  }
  

}
  isCampoInvalido(campo: string): boolean {
    const nomeCampo = this.camposForm.get(campo);
    return nomeCampo?.invalid && nomeCampo?.touched || false;
  }

}
