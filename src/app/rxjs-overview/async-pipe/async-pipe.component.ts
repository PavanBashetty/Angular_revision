import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { newStudent } from 'src/app/_classes/studentList';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {


  studentData$!: Observable<newStudent[]>;

  users = [
    {"id":5, "name":"duh!", "age":40},
    {"id":6, "name":"bla", "age":44},
  ];
  users$ = of(this.users)

  constructor(private apiService:ApiService){}
  ngOnInit(){
    this.studentData$ = this.apiService.getStudentList();
  }


}
