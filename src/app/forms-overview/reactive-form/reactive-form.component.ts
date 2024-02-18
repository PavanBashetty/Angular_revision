import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api.service';
import { FormsOverviewComponent } from '../forms-overview.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  studentForm: FormGroup = new FormGroup({});
  successMsg!:string;
  constructor(private apiService:ApiService, private formBuilder:FormBuilder, private formOverViewComp:FormsOverviewComponent){}
  ngOnInit(){
    this.studentForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      age:[0,Validators.required],
      address: this.formBuilder.group({
        street:['', Validators.required],
        city:['', Validators.required],
        zipcode:['', Validators.required],
        country:['', Validators.required]
      }),
      aliases: this.formBuilder.array([])
    })
  }

  get aliases(){
    return this.studentForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.formBuilder.control(''));
  }
  removeAlias(i:number){
    this.aliases.removeAt(i);
  }
  submitNewStudent(){
    this.apiService.addNewStudent(this.studentForm.value).subscribe({
      next:()=>{
        this.successMsg = 'New student entry added successfully!!';
        this.formOverViewComp.getStudentData();
        this.studentForm.reset();
        setTimeout(()=>{
          this.successMsg = ''
        },2500)
      },
      error:(error:any)=>{console.log(error)}
    })
  }
  cancelSubmission(){
    this.aliases.clear();
    this.studentForm.reset();
  }

  get isFormValid():boolean{
    return this.studentForm.valid;
  }

  
}
