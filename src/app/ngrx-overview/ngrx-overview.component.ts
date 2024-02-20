import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateData } from '../_store/_simpleStatement/statement.actions';

@Component({
  selector: 'app-ngrx-overview',
  templateUrl: './ngrx-overview.component.html',
  styleUrls: ['./ngrx-overview.component.scss']
})
export class NgrxOverviewComponent {


  varSharedDataN!:string;
  
  constructor(private store:Store<{statement:string}>){}
  ngOnInit(){
    this.store.select('statement').subscribe({
      next:(data)=>{this.varSharedDataN = data}
    })
  }

  updateDataN(){
    this.store.dispatch(updateData({newData:'Shared data via NgRx updated in ngrx component'}))
  }
}
