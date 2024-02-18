import { Directive, ElementRef } from "@angular/core";



@Directive({
    selector:'[appHighlight]'
})
export class HighlightBackground{

    constructor(private element:ElementRef){}
    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = 'green';
        this.element.nativeElement.style.color = 'white';
        this.element.nativeElement.style.display = 'inline-block';
        this.element.nativeElement.style.padding = '5px';
        this.element.nativeElement.style.borderRadius = '10px';
    }
}