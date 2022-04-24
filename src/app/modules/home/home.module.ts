import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import {CoursesModule} from "../courses/courses.module";
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoursesModule,
    CoreModule
  ]
})
export class HomeModule { }
