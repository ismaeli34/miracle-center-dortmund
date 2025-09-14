import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  churchName: string = 'Miracle Center Church International e.V Dortmund';
  contactEmail: string = 'info@miraclecenter.de';
  contactAddress: string = 'Gutenbergstraße 33, 44139 Dortmund, Germany';
  dataProtectionOfficer: string = 'Rev Pastor Prince Edos';
  dpoEmail: string = 'info@miraclecenter.de';

}
