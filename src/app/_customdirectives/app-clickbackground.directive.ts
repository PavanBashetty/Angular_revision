import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector:'[clickToHighlight]'
})
export class ClickBackgroundHighlight{

    private count:boolean = false;
    constructor(private element:ElementRef){}
    ngOnInit(){}

    @HostListener('click') onClick(){
        this.count = !this.count;
        if(this.count){
            this.element.nativeElement.style.backgroundColor = 'yellow';
            this.element.nativeElement.style.display = 'inline-block';
            this.element.nativeElement.style.padding = '5px';
            this.element.nativeElement.style.borderRadius = '10px';
        }else{
            this.element.nativeElement.style.backgroundColor = '';
            this.element.nativeElement.style.display = '';
            this.element.nativeElement.style.padding = '';
            this.element.nativeElement.style.borderRadius = '';
        }
    }
}