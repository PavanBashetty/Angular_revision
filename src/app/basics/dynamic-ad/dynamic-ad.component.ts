import { Component } from '@angular/core';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AdService } from 'src/app/_services/ad.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dynamic-ad',
  templateUrl: './dynamic-ad.component.html',
  styleUrls: ['./dynamic-ad.component.scss']
})
export class DynamicAdComponent {

  public comp = MobilesComponent;
  public adList!: any[];
  public currentAdIndex:number = 1;
  public adIntervalSubscription!:Subscription;

  constructor(private adService:AdService){}
  ngOnInit(){
    this.adList = this.adService.getAds();
    this.startAdInterval();
  }

  //With the getter method (get currentAd()), you access the value directly like a property. With the regular method (currentAd()), you access the value by calling the method
  get currentAd(){    
    return this.adList[this.currentAdIndex-1];
  }

  displayNextAd(){
    this.currentAdIndex == this.adList.length ? this.currentAdIndex = 1 : this.currentAdIndex++
  }

  startAdInterval(){
    this.adIntervalSubscription = interval(3000).subscribe(()=>{      
      this.displayNextAd()})
  }

  stopAdInterval(){
    if(this.adIntervalSubscription){this.adIntervalSubscription.unsubscribe()}
  }

  ngOnDestroy(){
    this.stopAdInterval();
  }

}
