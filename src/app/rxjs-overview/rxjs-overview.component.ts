import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rxjs-overview',
  templateUrl: './rxjs-overview.component.html',
  styleUrls: ['./rxjs-overview.component.scss']
})
export class RxjsOverviewComponent {

  hideOverviewMsg:boolean = false;
  currentURLPath!:string;

  constructor(private router:Router){}
  ngOnInit(){
  }
}
