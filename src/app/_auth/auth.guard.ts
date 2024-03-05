import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { CommonService } from '../_services/common.service';


@Injectable({
  providedIn:'root'
})
class PermissionService{

  currentPipeState!:boolean;
  constructor(private commonServices:CommonService, private router:Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    
    localStorage.getItem('pipeAuth') == 'true'? this.currentPipeState = true : this.currentPipeState = false;
    
    // this.commonServices.pipeAuth$.subscribe({
    //   next: (data)=>this.currentPipeState = data,
    //   error:()=>this.currentPipeState = false
    // })
    
    if(!this.currentPipeState){
      console.log('You are not authorized to access the pipe component');
      this.router.navigate(['/basics/no-access']);      
    }
    return this.currentPipeState;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate(route, state)
};
