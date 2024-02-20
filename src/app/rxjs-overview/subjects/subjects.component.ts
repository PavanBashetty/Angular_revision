import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { dataShareObservables } from 'src/app/_services/dataShare-Obv.service';
import { dataShareService } from 'src/app/_services/dataShare-ser.service';
import { updateData } from 'src/app/_store/_simpleStatement/statement.actions';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

  
  varSharedDataS!:string;
  varSharedDataO!:string;
  varSharedDataN!:string;

  subscriberOne!:any;
  subscriberTwo!:any;

  subscriberThree!:any;
  subscriberFour!:any;


  constructor(private dataShareS:dataShareService, private dataShareO:dataShareObservables, private store:Store<{statement:string}>){}
  ngOnInit(){
    this.varSharedDataS = this.dataShareS.getSharedDataS();
    this.dataShareO.data$.subscribe({
      next: (data)=>{this.varSharedDataO = data}
    })

    //Creating one observable. 
      //Observable has one callback func. So, we create an object, it has a next method. Basically this callback holds/creates data and whoever
      //subscribes to it, gets that data. In below case, callback generates a random number and whoever subscribes to it, gets that random number
      //Also, we use next method when we want to pass data to subscribers
    const obs = new Observable(obj=>obj.next(Math.random()));
    //Subscriber 1
    obs.subscribe({next: (data)=>{this.subscriberOne = data}})
    //Subscriber 2
    obs.subscribe({next:(data)=>{this.subscriberTwo = data}});

    //Creating one subject.
      //Unlike a plain observable which takes a callback where we pass the data, subject don't have any arguments
    const sub = new Subject<number>();
    //subscriber 1
    sub.subscribe({next:(data)=>{this.subscriberThree = data}})
    //subscriber 2
    sub.subscribe({next:(data)=>{this.subscriberFour = data}})
    sub.next(Math.random());

    //ngrx
    this.store.select('statement').subscribe({
      next:(data)=>this.varSharedDataN = data
    })
  }

  updateDataS(){
    this.dataShareS.setSharedDataS('Shared data via Service updated in RxJS-Subject component');
    this.varSharedDataS = this.dataShareS.getSharedDataS();
  }

  updateDataO(){
    this.dataShareO.updateDataO('Shared data via observable updated in RxJS-Subject component');
    
  }

  updateDataN(){
    this.store.dispatch(updateData({newData:'Shared data via NgRx updated in RxJS-Subject component'}))
  }


}
