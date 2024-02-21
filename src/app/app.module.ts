import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsOverviewComponent } from './forms-overview/forms-overview.component';
import { RxjsOverviewComponent } from './rxjs-overview/rxjs-overview.component';
import { NgrxOverviewComponent } from './ngrx-overview/ngrx-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { FooterComponent } from './footer/footer.component';
import { ChildOneComponent } from './basics/child-one/child-one.component';
import { DynamicAdComponent } from './basics/dynamic-ad/dynamic-ad.component';
import { ExtrasComponent } from './extras/extras.component';
import { AlertSuccessComponent } from './extras/alert-success/alert-success.component';
import { AlertDangerComponent } from './extras/alert-danger/alert-danger.component';
import { MobilesComponent } from './basics/dynamic-ad/mobiles/mobiles.component';
import { ShoesComponent } from './basics/dynamic-ad/shoes/shoes.component';
import { PipesComponent } from './basics/pipes/pipes.component';

import { ExponentialStrengthPipe } from './_custompipes/exponential-strength.pipe';
import { ToBinaryPipe } from './_custompipes/binary.pipe';
import { CalculateAgePipe } from './_custompipes/calculateAge.pipe';
import { SingleSlotComponent } from './content-projection/single-slot/single-slot.component';
import { MultiSlotComponent } from './content-projection/multi-slot/multi-slot.component';
import { ProductDashboardComponent } from './content-projection/product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './content-projection/product-dashboard/product-widget/product-widget.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { CustomComponent } from './directives/custom/custom.component';

import { HighlightBackground } from './_customdirectives/app-highlight.directive';
import { ClickBackgroundHighlight } from './_customdirectives/app-clickbackground.directive';
import { MouseHover } from './_customdirectives/app-mousehover.directive';
import { TemplateFormComponent } from './forms-overview/template-form/template-form.component';
import { ReactiveFormComponent } from './forms-overview/reactive-form/reactive-form.component';
import { ObservablePromisesComponent } from './rxjs-overview/observable-promises/observable-promises.component';
import { AsyncPipeComponent } from './rxjs-overview/async-pipe/async-pipe.component';
import { OperatorsComponent } from './rxjs-overview/operators/operators.component';
import { SubjectsComponent } from './rxjs-overview/subjects/subjects.component';
import { CounterComponent } from './ngrx-overview/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './_store/_counter/counter.reducer';
import { statementReducer } from './_store/_simpleStatement/statement.reducer';
import { NoAccessComponent } from './no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    ContentProjectionComponent,
    DirectivesComponent,
    FormsOverviewComponent,
    RxjsOverviewComponent,
    NgrxOverviewComponent,
    PageNotFoundComponent,
    FooterComponent,
    ChildOneComponent,
    DynamicAdComponent,
    ExtrasComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    MobilesComponent,
    ShoesComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    ToBinaryPipe,
    CalculateAgePipe,
    SingleSlotComponent,
    MultiSlotComponent,
    ProductDashboardComponent,
    ProductWidgetComponent,
    StructuralComponent,
    AttributeComponent,
    CustomComponent,
    HighlightBackground,
    ClickBackgroundHighlight,
    MouseHover,
    TemplateFormComponent,
    ReactiveFormComponent,
    ObservablePromisesComponent,
    AsyncPipeComponent,
    OperatorsComponent,
    SubjectsComponent,
    CounterComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      count:counterReducer,
      statement:statementReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
