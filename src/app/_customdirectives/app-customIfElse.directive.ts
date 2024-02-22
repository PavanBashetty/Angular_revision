import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector:'[myOwnCompleteIf]'
})
export class showElementViaIfElse{

    private condition:boolean = false;
    @Input() set myOwnCompleteIf(condition:boolean){
        this.condition = condition;
        this.displayTemplate();
    }

    @Input() myOwnCompleteIfElse?:TemplateRef<any>;

    constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef){}
    ngOnInit(){
        this.displayTemplate();
    }

    displayTemplate(){
        this.viewContainerRef.clear();
        if(this.condition){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }else if(this.myOwnCompleteIfElse){
            this.viewContainerRef.createEmbeddedView(this.myOwnCompleteIfElse)
        }
    }
}