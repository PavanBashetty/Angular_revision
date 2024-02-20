import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsOverviewComponent } from './forms-overview/forms-overview.component';
import { RxjsOverviewComponent } from './rxjs-overview/rxjs-overview.component';
import { NgrxOverviewComponent } from './ngrx-overview/ngrx-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExtrasComponent } from './extras/extras.component';
import { PipesComponent } from './basics/pipes/pipes.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { CustomComponent } from './directives/custom/custom.component';
import { TemplateFormComponent } from './forms-overview/template-form/template-form.component';
import { ReactiveFormComponent } from './forms-overview/reactive-form/reactive-form.component';
import { ObservablePromisesComponent } from './rxjs-overview/observable-promises/observable-promises.component';
import { AsyncPipeComponent } from './rxjs-overview/async-pipe/async-pipe.component';
import { OperatorsComponent } from './rxjs-overview/operators/operators.component';
import { SubjectsComponent } from './rxjs-overview/subjects/subjects.component';
import { CounterComponent } from './ngrx-overview/counter/counter.component';

const routes: Routes = [
  {path:'', redirectTo:'/basics', pathMatch:'full'},
  {
    path:'basics', component:BasicsComponent,
    children:[
      {path:'pipes', component:PipesComponent}
    ]
  },
  {path:'contentProjection', component:ContentProjectionComponent},
  {
    path:'directives', component:DirectivesComponent,
    children:[
      {path:'structrual', component:StructuralComponent},
      {path:'attribute', component:AttributeComponent},
      {path:'custom', component:CustomComponent}
    ]
  },
  {
    path:'forms', component:FormsOverviewComponent,
    children:[
      {path:'template', component:TemplateFormComponent},
      {path:'reactive', component:ReactiveFormComponent}
    ]
  },
  {
    path:'rxjs', component:RxjsOverviewComponent,
    children:[
      {path:'observablePromises', component:ObservablePromisesComponent},
      {path:'asyncpipe', component:AsyncPipeComponent},
      {path:'operators', component:OperatorsComponent},
      {path:'subjects', component:SubjectsComponent}
    ]
  },
  {
    path:'ngrx', component:NgrxOverviewComponent,
    children:[
      {path:'counter', component:CounterComponent}
    ]
  },
  {path:'extras', component:ExtrasComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
