import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { favMovie } from '../_classes/favMovie';
import { ApiService } from '../_services/api.service';
import { newStudent } from '../_classes/studentList';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-forms-overview',
  templateUrl: './forms-overview.component.html',
  styleUrls: ['./forms-overview.component.scss']
})
export class FormsOverviewComponent {

  successMsg!:string;
  favMovieList!:favMovie[];

  completeStudentData!:newStudent[];

  @ViewChild('editRatingModal', {static:true}) editRatingModal!: TemplateRef<any>;
  selectedMovieId!:string;
  currentRating!:number;
  selectedMovieName!:string;

  constructor(private apiService:ApiService, private dialogRef: MatDialog, private commonService:CommonService){}
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
  openEditRatingDialog(selectedMovie:favMovie){
    this.selectedMovieName = selectedMovie.movieName;
    this.selectedMovieId = selectedMovie.id;
    this.currentRating = selectedMovie.movieRating;
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '500px';
    // dialogConfig.height = '200px';
    this.dialogRef.open(this.editRatingModal, this.commonService.dialogConfig); 
  }
  submitNewRating(){    
    this.apiService.editMovieRating(this.selectedMovieId, this.currentRating).subscribe({
      next:()=>{        
        this.getFavMovieList();
        this.cancelRateEditing();
      },
      error:(error:any)=>{console.log(error)}
    })
  }
  cancelRateEditing(){
    this.dialogRef.closeAll()
  }

  getStudentData(){
    this.apiService.getStudentList().subscribe({
      next:(data:newStudent[])=>{this.completeStudentData = data},
      error:(error:any)=>{console.log(error)}
    })
  }
  
  studentDetail(id:string){}
}
