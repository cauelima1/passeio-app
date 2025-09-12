import { Component, OnInit } from '@angular/core';
import { LayoutProps } from '../../lugares/lugar-component/layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs'
import { AuthGoogleService } from '../../auth-googleService';


@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {
  props: LayoutProps = { titulo: '', subTitulo: ''};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: AuthGoogleService
    ){
    }
  

    ngOnInit(): void {
        this.router.events
        .pipe(
          filter( () => this.activatedRoute.firstChild !== null),
          map( () => this.obterData())
        ).subscribe((props: LayoutProps) => this.props = props)
    }


    obterData() : LayoutProps {
      let rotaFilha = this.activatedRoute.firstChild;

      while(rotaFilha?.firstChild){
        rotaFilha = rotaFilha.firstChild;
      }
      return rotaFilha?.snapshot.data as LayoutProps;
    }

    logOut (){
      return this.loginService.logout();
    }

}
