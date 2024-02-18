import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'toBinary'
})
export class ToBinaryPipe implements PipeTransform{
    transform(n:number):string {
        let createdBinary:string = ''
        while(n>0){
            if(n%2==1){
                createdBinary = '1' + createdBinary
            }else{
                createdBinary = '0' + createdBinary
            }
            n = Math.floor(n/2);
        }
        return createdBinary
    }
}