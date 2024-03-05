import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {MatDialogConfig} from '@angular/material/dialog';

@Injectable({providedIn:'root'})
export class CommonService{

    //TO USE OBSERVABLES FOR PIPE AUTHORIZATION
    private pipeAuthSubject = new BehaviorSubject<boolean>(false);
    pipeAuth$ = this.pipeAuthSubject.asObservable();
    
    //MODAL DIALOG DIMENSIONS
    public dialogConfig = new MatDialogConfig();

    constructor(){
        this.dialogConfig.autoFocus = true;
        this.dialogConfig.width = '500px';
        this.dialogConfig.height = '200px';
    }
    
    updatePipeAuth(access:boolean){
        this.pipeAuthSubject.next(access);
    }


    

}