import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from './events.component';
import {EventsSingleComponent} from './events-single/events-single.component';
import {SundayWorshipServiceComponent} from './sunday-worship-service/sunday-worship-service.component';
import {HolyCommunionServiceComponent} from './holy-communion-service/holy-communion-service.component';
import {BaptismComponent} from './baptism/baptism.component';
import {MidnightPrayerComponent} from './midnight-prayer/midnight-prayer.component';
import {ChildDedicationComponent} from './child-dedication/child-dedication.component';
import {MembershipClassComponent} from './membership-class/membership-class.component';
import {ConnectGroupComponent} from '../connect-group/connect-group.component';

const routes: Routes = [
  {
    path:'',
    component:EventsComponent,
    children:[
      {path:'', component: EventsSingleComponent},
      {path:'sunday-worship-service', component: SundayWorshipServiceComponent},
      {path:'holy-communion-service',component: HolyCommunionServiceComponent},
      {path:'baptism-service', component: BaptismComponent},
      {path:'midnight-prayer', component: MidnightPrayerComponent},
      {path:'child-dedication',component: ChildDedicationComponent},
      {path:'membership-class',component: MembershipClassComponent}
    ]
  },
  { path: 'events/:id', component: EventsSingleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
