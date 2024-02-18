import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, firstValueFrom } from "rxjs";
import { widgetProductCompleteInfo } from "../_classes/widgetProducts";
import { favMovie } from "../_classes/favMovie";
import { newStudent } from "../_classes/studentList";


@Injectable({
    providedIn:'root'
})
export class ApiService{

    private widgetProductURL:string = "/assets/data/widgetProductData.json";
    private apiURL:string = "http://localhost:3000";

    constructor(private http:HttpClient){}

    getWidgetProducts():Observable<any>{
        return this.http.get<any>(`${this.widgetProductURL}`)
    }

    addNewMovie(movieData:favMovie):Observable<any>{
        return this.http.post<any>(`${this.apiURL}/favoriteMovies`, movieData)
    }

    getFavMovieList():Observable<favMovie[]>{
        return this.http.get<favMovie[]>(`${this.apiURL}/favoriteMovies`)
    }

    deleteFavMovie(id:string):Observable<any>{
        return this.http.delete<any>(`${this.apiURL}/favoriteMovies/${id}`)
    }

    addNewStudent(newStudentData:newStudent):Observable<any>{
        return this.http.post<any>(`${this.apiURL}/studentsData`, newStudentData)
    }
    getStudentList():Observable<newStudent[]>{
        return this.http.get<newStudent[]>(`${this.apiURL}/studentsData`)
    }
    searchStudent(studentName:string):Observable<newStudent[]>{
        return this.http.get<newStudent[]>(`${this.apiURL}/studentsData?firstName=${studentName}`)
    }

    

    //this method returns a promise instead of an observable. Inside this method, we use await to asynchronously wait for the HTTP request to complete and return the result.
    // HTTP request using this.http.get(), it returns an observable of the HTTP response. Then for testing we convert this observable to promise. Earlier it was done 
    // using toPromise() but it is now deprecated so we use firstValueFrom instead
    async getStudentListViaPromise(): Promise<newStudent[]>{
        try{
            // const data = await this.http.get<newStudent[]>(`${this.apiURL}/studentsData`).toPromise();
            const data = await firstValueFrom(this.http.get<newStudent[]>(`${this.apiURL}/studentsData`))
            if(data === undefined){
                throw new Error('Received undefined data from server');
            }
            return data;
        }catch(error){
            throw error;
        }
    }

}