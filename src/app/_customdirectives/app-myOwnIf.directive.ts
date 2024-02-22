import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector:'[myOwnIf]'
})
export class showElementViaIf{

    constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef){}

    @Input() set myOwnIf(condition:boolean){
        if(condition){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }else{
            this.viewContainerRef.clear();
        }
    }
}