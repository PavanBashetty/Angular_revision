import { Component } from '@angular/core';
import { dataShareService } from '../_services/dataShare-ser.service';
import { dataShareObservables } from '../_services/dataShare-Obv.service';
import { Store } from '@ngrx/store';
import { updateData } from '../_store/_simpleStatement/statement.actions';
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {


  public dataFromChild!:string;
  public dataToChild:string = 'This message displayed in Child comp is coming from Parent comp';

  public disableInput:boolean = true;
  public enteredName!:string;

  public varSharedDataS!:string;
  public varSharedDataO!:string;
  public varSharedDataN!:string;

  public currentPipeAuthState!:boolean;

  constructor(private dataShareS:dataShareService, private dataShareO:dataShareObservables, private store:Store<{statement:string}>, private commonServices:CommonService){}
  ngOnInit(){
    this.varSharedDataS = this.dataShareS.getSharedDataS();
    this.dataShareO.data$.subscribe({
      next:(data)=>{this.varSharedDataO = data}
    })

    //ngrx
    this.store.select('statement').subscribe({
      next:(data)=>{this.varSharedDataN = data}
    })

    this.commonServices.pipeAuth$.subscribe({
      next:(data)=>this.currentPipeAuthState = data
    })
  }


  updateDataS(){
    this.dataShareS.setSharedDataS('Shared data via Service updated in basics component');
    this.varSharedDataS = this.dataShareS.getSharedDataS();
  }

  updateDataO(){
    this.dataShareO.updateDataO('Shared data via Observable updated in basics component');
  }

  updateDataN(){
    this.store.dispatch(updateData({newData:'Shared data via NgRx updated in basics component'}))
  }

  authorizePipe(){
    this.commonServices.updatePipeAuth(true);
    setTimeout(()=>{this.currentPipeAuthState = false},3000)
  }
}
