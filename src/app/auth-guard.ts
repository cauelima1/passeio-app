import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router';
import { AuthGoogleService } from './auth-googleService';
import { ProfileModel } from './landingpage/profile.model'

export const authGuard: CanActivateFn = (route, state) => {
  const loginService : AuthGoogleService = inject(AuthGoogleService);
  const router : Router = inject(Router);

  const loggedProfile : ProfileModel =  loginService.getLoggedProfile();

  if(loggedProfile){
    return true
  }

  router.navigate(['']);
  
  return true;
};
