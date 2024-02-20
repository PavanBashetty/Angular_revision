import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customValueChange, decrement, increment, reset } from 'src/app/_store/_counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  displayCount!:number;
  customInput:number = 0;
  actionType:string = 'add';

  constructor(private store:Store<{count:number}>){}
  ngOnInit(){
    this.store.select('count').subscribe({
      next: data=>{this.displayCount = data}
    })
  }

  onIncrement(){
    this.store.dispatch(increment())
  }

  onDecrement(){
    this.store.dispatch(decrement())
  }

  onReset(){
    this.store.dispatch(reset())
  }

  customValueEdit(){
    this.store.dispatch(customValueChange({value:+this.customInput, actionType:this.actionType}));
    this.customInput = 0;
  }
}
