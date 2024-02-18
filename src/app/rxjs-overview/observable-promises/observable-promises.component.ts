import { Component } from '@angular/core';
import { Observable, Subscription, filter } from 'rxjs';
import { newStudent } from 'src/app/_classes/studentList';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-observable-promises',
  templateUrl: './observable-promises.component.html',
  styleUrls: ['./observable-promises.component.scss']
})
export class ObservablePromisesComponent {


  studentListObservable!: newStudent[];
  stuDataSubscription!: Subscription;

  studentListPromise!:newStudent[];

  secObservableSubscription!:Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getStudentDataObservables();
    this.getStudentDataPromise();

    //Promise
    const promise = new Promise(res =>{
      console.log('Promise call..');
      setTimeout(()=>{
        res('Promise working1...');
        res('Promise working2...'); // 2,3, & 4 won't be displayed 'cus promise returns only one value
        res('Promise working3...');
        res('Promise working4...');
      },1000);
    });

    promise.then((result)=>{console.log(result)}); //To listen to this promise


    //Observable
    const observable = new Observable(sub=>{
      console.log('Observable call..'); // executes only if we subscribe to the object
      setTimeout(()=>{
        sub.next('Observable working1...');
        sub.next('Observable working2...');
        sub.next('Observable working3...');
        sub.next('Observable working4...');
      },1000); // setTimeout is used that it returns an observable after certain time, like an asynchronous
    });

      //Operator needs to applied before subscribe using pipe method (basically to pipe any array method on the observable object)
    observable.pipe(
      filter(data=>data == 'Observable working3...')
    ).subscribe({
      next:(result)=>{console.log(result)}}); //To listen to this observable

  
    //Another observable to show unsubscribe method.
    //Here we subscribed to an observable that emits incremented value every sec, 
    //if we don't unsubscribe, it will keep emitting even when we navigate to different pages.
    //and if we go back this page, it will start new emit and at the same time old one will also be emitting
    //This is data leak and to avoid this we unsubscribe
    // const secObservable = new Observable(sub=>{
    //   console.log('Observable call...');
    //   let counter = 0;
    //   setInterval(()=>{
    //     counter++;
    //     sub.next(counter);
    //   },1000)
    // });
    
    // this.secObservableSubscription = secObservable.subscribe({
    //   next:(result)=>{console.log('Count: ' + result)}
    // })
  }

  getStudentDataObservables() {
    this.stuDataSubscription = this.apiService.getStudentList().subscribe({
      next: (data: newStudent[]) => { this.studentListObservable = data },
      error: (error: any) => { console.log(error) }
    })
  }

  ngOnDestroy() {
    if(this.stuDataSubscription){this.stuDataSubscription.unsubscribe()};
    if(this.secObservableSubscription){this.secObservableSubscription.unsubscribe()};
   }

   getStudentDataPromise(){
    this.apiService.getStudentListViaPromise()
    .then((data:newStudent[])=>{this.studentListPromise = data})
    .catch((error:any)=>{console.log(error)})
   }
}
