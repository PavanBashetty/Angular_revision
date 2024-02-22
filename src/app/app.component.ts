import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_revision';

  constructor(){}

  ngOnInit(){
    if(!localStorage.getItem('pipeAuth')){
      localStorage.setItem('pipeAuth', 'false')
    }
  }
}
