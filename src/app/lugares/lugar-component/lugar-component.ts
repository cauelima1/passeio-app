import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ControlValueAccessor, FormControl} from'@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria-service';
import { LugarService } from '../lugar-service';

@Component({
  selector: 'app-lugar-component',
  standalone: false,
  templateUrl: './lugar-component.html',
  styleUrl: './lugar-component.scss'
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];


  constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugarService){
      this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }


  salvar (){
    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid){
      this.lugarService.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log("Lugar cadastrado com sucesso", lugar)
          this.camposForm.reset();
        },
        error: erro => console.error('Ocorreu um erro: ', erro)
        })
      }
  }

  ngOnInit(): void {
      this.categoriaService.listarTodas().subscribe({
      next: (listaCategorias) => this.categorias = listaCategorias
  })
  }

    isCampoInvalido(campo: string): boolean {
    const nomeCampo = this.camposForm.get(campo);
    return nomeCampo?.invalid && nomeCampo?.touched || false;
  }
}
