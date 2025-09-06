import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import {AboutComponent} from './about.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {FaithStatementComponent} from './faith-statement/faith-statement.component';
import {OurPastorComponent} from './our-pastor/our-pastor.component';
import {HistoryComponent} from './history/history.component';
import {ChurchStaffComponent} from './church-staff/church-staff.component';
import {SupportingComponent} from './supporting/supporting.component';
import {GalleryComponent} from 'ng-gallery';
import {PurposeAndMissionComponent} from './purpose-and-mission/purpose-and-mission.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    AboutComponent,
    AboutUsComponent,
    OurPastorComponent,
    FaithStatementComponent,
    HistoryComponent,
    ChurchStaffComponent,
    SupportingComponent,
    GalleryComponent,
    PurposeAndMissionComponent

  ]
})
export class AboutModule { }
