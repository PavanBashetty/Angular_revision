import { Component, Input } from '@angular/core';
import { widgetProducts } from 'src/app/_classes/widgetProducts';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent {

  @Input() products!:widgetProducts[];

  constructor(){}
  ngOnInit(){}

}
