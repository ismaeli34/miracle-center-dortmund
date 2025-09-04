import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {LanguageService} from '../services/language.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule, MatAutocompleteModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent implements OnInit{

  languages: Language[] = [
    { lang: 'en', name: 'English', flag: '🇬🇧',  value: 'en', },
    { lang: 'de', name: 'German', flag: '🇩🇪', value: 'en' },

  ];
  lang ='';

  showAboutMenu = false;
  showConnectMenu = false;
  showEventMenu = false;
  isMenuOpen = false;
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  constructor(private location: Location,
              private router: Router,
              private translateService: TranslateService,
              private cdr: ChangeDetectorRef,
              private languageService: LanguageService

  ) {


  }

  isActive(route: string): boolean {
    return this.router.isActive(route, false);

  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLang(selectedLanguage: string) {
    this.languageService.changeLanguage(selectedLanguage);
  }


  ngOnInit() {
    // Subscribe to language changes from the service
    this.languageService.currentLang$.subscribe(lang => {
      this.lang = lang;
      this.translateService.use(lang);
      this.cdr.detectChanges();

      console.log("HEADER LANG", this.lang);
    });
  }

}
interface Language {
  lang: string;
  name:string;
  flag:string;
  value:string;
}
