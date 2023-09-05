import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersistenceService } from 'src/services/persistence.service';
import KeenSlder from 'keen-slider'
import { Observable, concatMap, delay, from, of, repeat, tap } from 'rxjs';
import { IonCard } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title: string = 'About';
  @ViewChild('card') card: ElementRef<HTMLDivElement> | undefined;
  images!: Observable<any>;
  constructor(private persistence: PersistenceService) {
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
    this.images.subscribe({
      next: (img) => {
        if(this.card){
          this.card.nativeElement.style.backgroundImage = `url(${img})`;
        }
      }
    });
}
}
