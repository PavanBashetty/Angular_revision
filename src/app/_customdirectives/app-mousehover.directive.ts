import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector: '[mouseHover]'
})
export class MouseHover{

    constructor(private element:ElementRef){}
    ngOnInit(){}

    @HostListener('mouseenter') onMouseEnter(){
        this.element.nativeElement.style.fontSize = '24px';
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.element.nativeElement.style.fontSize = '12px'
    }

}