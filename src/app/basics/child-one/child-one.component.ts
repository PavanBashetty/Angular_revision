import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent {

  @Input() dataFromParent!:string;
  @Output() childEvent = new EventEmitter();

  constructor(){}
  ngOnInit(){}

  fireEvent(){
    this.childEvent.emit('This message in Parent comp is emitted by Child comp');
  }
}
