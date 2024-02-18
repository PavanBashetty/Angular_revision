import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent {

  public twoWayVar!:string;
  public changeFontStyle:boolean = false;
  public changeFontSize:boolean = false;
  public changeFontWeight:boolean = false;
  public currentStyles!:any;

  constructor(){}
  ngOnInit(){
    this.setCurrentStyles();
  }

  setCurrentStyles(){
    this.currentStyles = {
      'font-style': this.changeFontStyle ? 'italic':'normal',
      'font-size': this.changeFontSize ? '24px':'12px',
      'font-weight':this.changeFontWeight ? 'bold':'normal'
    }
  }

  addClass(){
    return {'text-font':false, 'text-color':true, 'text-background':false}
  }
}
