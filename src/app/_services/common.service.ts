import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({providedIn:'root'})
export class CommonService{

    // currentPipeAuthState:boolean = localStorage.getItem('pipeAuth') == 'false' ? false:true;    
    private pipeAuthSubject = new BehaviorSubject<boolean>(false);
    pipeAuth$ = this.pipeAuthSubject.asObservable();
    updatePipeAuth(access:boolean){
        this.pipeAuthSubject.next(access);
    }
}