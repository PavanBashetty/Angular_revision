import { Component } from '@angular/core';
import { widgetProductCompleteInfo } from 'src/app/_classes/widgetProducts';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {

  // Shoes!: widgetProductCompleteInfo;
  // Laptops!: widgetProductCompleteInfo;

  shoeTag!:string;
  shoeLink!:string;
  shoeProducts!: any[];

  laptopTag!:string;
  laptopLink!:string;
  laptopProducts!: any[];


  constructor(private apiSerive:ApiService){}
  ngOnInit(){
    this.getProductsData();
  }

  getProductsData(){
    this.apiSerive.getWidgetProducts().subscribe({
      next:(data)=>{
        this.shoeTag = data.Shoes.tag;
        this.shoeLink = data.Shoes.link;
        this.shoeProducts = data.Shoes.productList;
        this.laptopTag = data.Laptops.tag;
        this.laptopLink = data.Laptops.link;
        this.laptopProducts = data.Laptops.productList;
      },
      error:(error:any)=>{console.log(error)}
    })
  }
}
