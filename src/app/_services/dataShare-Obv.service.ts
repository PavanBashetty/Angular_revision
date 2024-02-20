import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class dataShareObservables{

    private dataSubject = new BehaviorSubject<string>('Shared data coming from observable');
    // BehaviorSubject is a type of a RxJS subject that stores the most recent value and emits it to new subscribers
    data$ = this.dataSubject.asObservable();
    //data$ is an Observable exposed by the service. It is created by calling asObservable()
    //The $ suffix in the variable name is a convention in Angular to indicate that it's an Observable.
    updateDataO(newDataO:string){
        this.dataSubject.next(newDataO);
    }

}