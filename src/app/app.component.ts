import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {FloatingButtonComponent} from './floating-button/floating-button.component';
import {CookiesConsentComponent} from './cookies-consent/cookies-consent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateModule, FloatingButtonComponent, CookiesConsentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-church';

  constructor(private  translateService: TranslateService) {

    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en')
    this.translateService.setFallbackLang('en');

  }
}
