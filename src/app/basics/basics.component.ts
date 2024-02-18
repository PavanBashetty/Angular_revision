import { Component } from '@angular/core';

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

  constructor(){}
  ngOnInit(){}


}
