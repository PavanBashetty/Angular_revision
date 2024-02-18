import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  date!:Date;

  constructor(){}
  ngOnInit(){
    this.date = new Date();    
  }
}
