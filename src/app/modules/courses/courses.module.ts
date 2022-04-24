import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesComponent} from './components/courses/courses.component';
import {CardComponent} from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from "@angular/material/select";
  import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DetailsComponent } from './components/details/details.component';
import { TemaryModalComponent } from './components/temary-modal/temary-modal.component';
import {CoreModule} from "../../core/core.module";

@NgModule({
  declarations: [
    CoursesComponent,
    CardComponent,
    DetailsComponent,
    TemaryModalComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    CoreModule
  ],
  exports: [
    CoursesComponent,
    CardComponent,
    TemaryModalComponent
  ]
})
export class CoursesModule {
}
