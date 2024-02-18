import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent {

  @Input() brand!:string;
  @Input() type!:string;
  @Input() price!:number;
  @Input() color!:string;

  constructor(){}
  ngOnInit(){}
}
