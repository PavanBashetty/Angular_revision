import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent {

  isVisible:boolean = true;
  public colors: string[] = ['red','blue','yellow','gray'];
  public movies:any[] = [
    {name:'Up',director:'Pete Docter',review:'Awesome!'},
    {name:'Saw',director:'Kevin Greutert',review:'Okay'},
    {name:'The Marvels',director:'Nia DaCosta',review:'Boring'},
    {name:'Animal',director:'Sandeep Reddy Vanga',review:'Worst'},
    {name:'Swades',director:'Ashutosh Gowariker',review:'Great'}
  ];

  selectedMovie!:string;

  constructor(){}
  ngOnInit(){}

}
