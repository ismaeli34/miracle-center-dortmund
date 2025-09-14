import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnectGroupComponent } from './connect-group/connect-group.component';
import { ContactComponent } from './contact/contact.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {VisitComponent} from './visit/visit.component';
import {DonationComponent} from './donation/donation.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CookiesConsentComponent} from './cookies-consent/cookies-consent.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  // lazy loading
  { path:'about',
    loadChildren:() =>       import('./about/about.routes').then(m => m.ABOUT_ROUTES)
  },
  {path:'connect',loadChildren:()=> import('./connect/connect.module').then(m=>m.ConnectModule)},
  {path:'events',loadChildren:()=> import('./events/events.module').then(m=>m.EventsModule)},
  {path:'know-god',loadChildren:()=> import('./know-god/know-god.module').then(m=>m.KnowGodModule)},
  { path: 'connect-group', component: ConnectGroupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'impressum', component: ImpressumComponent },
  {path:'cookie-consent', component: CookiesConsentComponent},
  {path:'visit', component:VisitComponent},
  {path:'donation', component:DonationComponent},
  { path: '**', component: PageNotFoundComponent }
];
