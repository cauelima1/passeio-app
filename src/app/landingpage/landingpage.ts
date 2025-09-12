import { Component } from '@angular/core';
import { ProfileModel } from './profile.model';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../auth-googleService';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

  profile: ProfileModel | undefined;
  
  constructor (private router: Router, private LoginService: AuthGoogleService){

  }

  navegar () {
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle() {
    this.LoginService.login();
  }



//método mais rápido de verificação condicional para verificação se não está vazia nem undefined
  isLoggedIn(): boolean {
    const dadosGoogle = this.LoginService.getLoggedProfile();
    this.profile = dadosGoogle;
    return !!this.profile;
  } 

}
