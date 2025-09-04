import {Component, OnInit} from '@angular/core';
import {GalleryItem, GalleryModule, ImageItem} from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  standalone:true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{

  images: GalleryItem[] =[];

  ngOnInit() {
    // Set items array
    const imagePaths = [
      'church_photo_2.jpg',
      'church_photo_3.jpg',
      'pastor-04.png'
    ];

    this.images = imagePaths.map(path => new ImageItem({ src: path, thumb: path }));

  }

}
