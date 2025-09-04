import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import {provideAnimations} from '@angular/platform-browser/animations';

// Merge your existing appConfig providers with the gallery config
const providers = [
  provideAnimations(), // <-- critical for @fadeIn and ng-gallery animations
  ...(appConfig.providers || []), // keep existing providers
  {
    provide: GALLERY_CONFIG,
    useValue: {
      autoHeight: true,
      imageSize: 'cover'
    } as GalleryConfig
  }
];

bootstrapApplication(AppComponent, { providers })
  .catch((err) => console.error(err));
