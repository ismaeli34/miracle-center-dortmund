import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ConnectGroupComponent } from './connect-group/connect-group.component';
import { ContactComponent } from './contact/contact.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import {EventsSingleComponent} from './events-single/events-single.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {VisitComponent} from './visit/visit.component';
import {DonationComponent} from './donation/donation.component';
import {FaithStatementComponent} from './about/faith-statement/faith-statement.component';
import {HistoryComponent} from './about/history/history.component';
import {ChurchStaffComponent} from './about/church-staff/church-staff.component';
import {SupportingComponent} from './about/supporting/supporting.component';
import {AboutUsComponent} from './about/about-us/about-us.component';
import {PurposeAndMissionComponent} from './about/purpose-and-mission/purpose-and-mission.component';
import {ConnectComponent} from './connect/connect.component';
import {ConnectUsComponent} from './connect/connect-us/connect-us.component';
import {BibleStudiesComponent} from './connect/bible-studies/bible-studies.component';
import {MinistriesComponent} from './connect/ministries/ministries.component';
import {PrayerMeetingsComponent} from './connect/prayer-meetings/prayer-meetings.component';
import {ServiceTeamsComponent} from './connect/service-teams/service-teams.component';
import {SundayWorshipServiceComponent} from './events/sunday-worship-service/sunday-worship-service.component';
import {HolyCommunionServiceComponent} from './events/holy-communion-service/holy-communion-service.component';
import {MidnightPrayerComponent} from './events/midnight-prayer/midnight-prayer.component';
import {ChildDedicationComponent} from './events/child-dedication/child-dedication.component';
import {MembershipClassComponent} from './events/membership-class/membership-class.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent , children :[
      { path: '', component: AboutUsComponent },
      { path: 'faith-statement', component: FaithStatementComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'church-staff', component: ChurchStaffComponent },
      { path: 'supporting', component: SupportingComponent },
      {path:'purpose-and-mission',component:PurposeAndMissionComponent}
    ]},
  {path:'connect',component: ConnectComponent,children:[
      {path:'', component: ConnectUsComponent},
      {path:'bible-studies', component: BibleStudiesComponent},
      {path:'ministries',component: MinistriesComponent},
      {path:'prayer-meetings',component: PrayerMeetingsComponent},
      {path:'service-teams',component: ServiceTeamsComponent}
    ]},
  { path: 'events', component: EventsComponent, children:[
      {path:'sunday-worship-service', component: SundayWorshipServiceComponent},
      {path:'holy-communion-service',component: HolyCommunionServiceComponent},
      {path:'midnight-prayer', component: MidnightPrayerComponent},
      {path:'child-dedication',component: ChildDedicationComponent},
      {path:'membership-class',component: MembershipClassComponent}
    ] },
  { path: 'events/:id', component: EventsSingleComponent },
  { path: 'connect-group', component: ConnectGroupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'datenschutz', component: PrivacyPolicyComponent },
  { path: 'impressum', component: ImpressumComponent },
  {path:'visit', component:VisitComponent},
  {path:'donation', component:DonationComponent},
  { path: '**', redirectTo: '' }
];
