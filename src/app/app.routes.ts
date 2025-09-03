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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent , children :[
      { path: '', component: AboutUsComponent },
      { path: 'faith-statement', component: FaithStatementComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'church-staff', component: ChurchStaffComponent },
      { path: 'supporting', component: SupportingComponent },
    ]},
  { path: 'events', component: EventsComponent },
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
