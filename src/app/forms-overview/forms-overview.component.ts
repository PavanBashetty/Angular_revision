import { Component } from '@angular/core';
import { favMovie } from '../_classes/favMovie';
import { ApiService } from '../_services/api.service';
import { newStudent } from '../_classes/studentList';

@Component({
  selector: 'app-forms-overview',
  templateUrl: './forms-overview.component.html',
  styleUrls: ['./forms-overview.component.scss']
})
export class FormsOverviewComponent {

  successMsg!:string;
  favMovieList!:favMovie[];

  completeStudentData!:newStudent[];

  constructor(private apiService:ApiService){}
  ngOnInit(){
    this.getFavMovieList();
    this.getStudentData();
  }

  getFavMovieList(){
    this.apiService.getFavMovieList().subscribe({
      next:(data:favMovie[])=>{this.favMovieList = data},
      error:(error:any)=>{console.log(error)}
    })
  }
  deleteFavMovie(id:string){
    this.apiService.deleteFavMovie(id).subscribe({
      next:()=>{
        this.successMsg = 'Movie deleted successfully!!';
        this.getFavMovieList();
        setTimeout(()=>{          
          this.successMsg = '';          
        },2500)
      },
      error:(error:any)=>{console.log(error)}
    })
  }

  getStudentData(){
    this.apiService.getStudentList().subscribe({
      next:(data:newStudent[])=>{this.completeStudentData = data},
      error:(error:any)=>{console.log(error)}
    })
  }
  
  studentDetail(id:string){}
}
