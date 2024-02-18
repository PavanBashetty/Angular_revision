import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent {

  public alert = AlertSuccessComponent;

  // If you had kept static: false, there could have been a timing issue where selectedTemplate might have been assigned before the @ViewChild queries were resolved, leading to selectedTemplate being undefined
  @ViewChild('templateOne',{static:true}) templateOne!:TemplateRef<any>;
  @ViewChild('templateTwo',{static:true}) templateTwo!:TemplateRef<any>;
  @ViewChild('templateThree',{static:true}) templateThree!:TemplateRef<any>;
  @ViewChild('templateFour',{static:true}) templateFour!:TemplateRef<any>;
  selectedTemplate!:TemplateRef<any>;
  currentTemplate:number = 0;
  private templateIntervalSubscription!:Subscription

  constructor(){}
  ngOnInit(){
    this.startTemplateInterval();
  }

  switchAlert(){
    this.alert == AlertSuccessComponent ? this.alert = AlertDangerComponent : this.alert = AlertSuccessComponent;
  }

  displayTemplate(){
    this.currentTemplate > 4 ? this.currentTemplate = 1 : this.currentTemplate++;
    switch(this.currentTemplate){
      case 1: 
        this.selectedTemplate = this.templateOne;
        break;
      case 2:
        this.selectedTemplate = this.templateTwo;
        break;
      case 3:
        this.selectedTemplate = this.templateThree;
        break;
      case 4:
        this.selectedTemplate = this.templateFour;
        break;
    }
  }

  startTemplateInterval(){
    this.templateIntervalSubscription = interval(2000).subscribe(()=>{
      this.displayTemplate();
    })
  }

  stopTemplateInterval(){
    if(this.templateIntervalSubscription){this.templateIntervalSubscription.unsubscribe()}
  }

  ngOnDestroy(){
    this.stopTemplateInterval();
  }
}
