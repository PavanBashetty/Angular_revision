import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent {

  @Input() phone!:string;
  @Input() price!:number;
  @Input() color!:string;

  constructor(){}
  ngOnInit(){}
}
