import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';
import {LanguageService} from '../services/language.service';
import {Subscription} from 'rxjs';
import {  VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import {LightgalleryModule} from 'lightgallery/angular';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    RouterLink,
    TranslateModule,
    LightgalleryModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  youtubeLink ="https://www.youtube.com/@revprinceedos924/videos"
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };


  lang = '';
  private langSubscription!: Subscription;
  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef,
    private languageService: LanguageService // Inject the service
  ) {}

  ngOnInit() {
    this.lang = this.languageService.getCurrentLang();

    this.langSubscription = this.languageService.currentLang$.subscribe(lang => {
      this.lang = lang;
      this.cdr.detectChanges(); // Trigger change detection
      console.log("HOME LANG", this.lang);
    });
  }





}
