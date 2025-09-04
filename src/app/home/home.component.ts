import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';
import {LanguageService} from '../services/language.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  lang = '';
  private langSubscription!: Subscription;
  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef,
    private languageService: LanguageService // Inject the service
  ) {}

  ngOnInit() {
    this.lang = this.languageService.getCurrentLang();
    this.translateService.use(this.lang);

    this.langSubscription = this.languageService.currentLang$.subscribe(lang => {
      this.lang = lang;
      this.translateService.use(lang).subscribe(() => {
        this.cdr.detectChanges();
        console.log("HOME LANG", this.lang);

      });
    });
  }


  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }


}
