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
    
    this.commonServices.pipeAuth$.subscribe({
      next: (data)=>this.currentPipeState = data,
      error:()=>this.currentPipeState = false
    })
    
    if(!this.currentPipeState){
      console.log('You are not authorized to access the pipe component');
      this.router.navigate(['/basics/pipes/no-access']);
      //When page refreshed, we don't get result as we expect. It can be solved if pipeAuth boolean value is stored in localStorge instead in an observable
    }
    return this.currentPipeState;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate(route, state)
};
