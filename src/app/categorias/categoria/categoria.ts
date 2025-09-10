import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CategoriaServicee } from '../categoria-service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {
  camposForm: FormGroup;

  constructor(private service: CategoriaServicee) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }


  salvar(){
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      this.service.salvar(this.camposForm.value)
      .subscribe( {
        next: categoria => { console.log('Salva com sucesso', categoria);
        this.camposForm.reset();
    },
  })
  }
  
}
  isCampoInvalido(campo: string): boolean {
    const nomeCampo = this.camposForm.get(campo);
    return nomeCampo?.invalid && nomeCampo?.touched || false;
  }

}
