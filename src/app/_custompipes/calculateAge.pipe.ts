import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'calculateAge'
})
export class CalculateAgePipe implements PipeTransform{
    transform(birthYear:number):string {
        let currentYear = new Date().getFullYear()
        let age:number = 0;
        currentYear > birthYear ? age = (currentYear - birthYear) : age = 0
        return age + ' years'
    }
}