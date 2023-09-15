import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, concatMap, delay, from, of, repeat } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title: string = 'About';
  @ViewChild('card') card: ElementRef<HTMLDivElement> | undefined;
  images!: Observable<any>;
  constructor() {
    this.images = from([
      'assets/slideshow/1.jpg',
      'assets/slideshow/2.jpg',
      'assets/slideshow/3.jpg',
      'assets/slideshow/4.jpg',
      'assets/slideshow/5.jpg',
    ]).pipe(
      concatMap(img => of(img).pipe(delay(2500))),
      repeat());
  }

  ngOnInit() {
}
}
