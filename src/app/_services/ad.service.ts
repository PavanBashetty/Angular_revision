import { Injectable, Type } from "@angular/core";
import { MobilesComponent } from "../basics/dynamic-ad/mobiles/mobiles.component";
import { ShoesComponent } from "../basics/dynamic-ad/shoes/shoes.component";


@Injectable({
    providedIn:'root'
})
export class AdService{

    getAds(){
        return [
            {
                component: MobilesComponent,
                inputs:{phone:'iPhone 14', price:1000, color:'red'}
            },
            {
                component:MobilesComponent,
                inputs:{phone:'Pixel 6', price:500, color:'silver'}
            },
            {
                component:ShoesComponent,
                inputs:{brand:'Adidas', type:'sneaker', price:55, color:'white'}
            },
            {
                component:ShoesComponent,
                inputs:{brand:'Nike', type:'gym', price:70, color:'black'}
            }
        ] as {component:Type<any>, inputs: Record<string, unknown>}[]
    }
}