import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class dataShareService{

    private sharedDataS:string = 'Shared data coming from service';

    getSharedDataS():string{ return this.sharedDataS}
    
    setSharedDataS(newDataS:string){
        this.sharedDataS = newDataS;
    }
}