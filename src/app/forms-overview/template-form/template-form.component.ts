import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { favMovie } from 'src/app/_classes/favMovie';
import { ApiService } from 'src/app/_services/api.service';
import { FormsOverviewComponent } from '../forms-overview.component';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  successMsg!:string;
  @ViewChild('movieForm', {static:false}) movieForm!: NgForm;

  constructor(private apiService:ApiService, private formOverViewComp: FormsOverviewComponent){}
  ngOnInit(){}

  submitNewMovie(movieData:favMovie){
    this.apiService.addNewMovie(movieData).subscribe({
      next:()=>{
        this.successMsg = 'New movie added successfully!!';
        this.movieForm.reset();
        this.formOverViewComp.getFavMovieList();
        setTimeout(()=>{
          this.successMsg = '';
        },2500)
      },
      error:(error:any)=>{console.log(error)}
    })
  }
}
