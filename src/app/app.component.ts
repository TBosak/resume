import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { PersistenceService } from 'src/services/persistence.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit{
  public appPages = [
    { title: 'About', url: '/#about', icon: 'information-circle', associated: 'about' },
    { title: 'Experience', url: '/#experience', icon: 'business', associated: 'experience' },
    { title: 'Education', url: '/#education', icon: 'school', associated: 'education' },
    { title: 'Portfolio', url: '/#portfolio', icon: 'briefcase', associated: 'portfolio' },
    { title: 'References', url: '/#bulletin', icon: 'chatbubbles', associated: 'bulletin' },
  ];
  @ViewChild('#main-content', {static: false}) private mainContent!: ElementRef<HTMLDivElement>;
  @ViewChild('aboutDiv', {static: false}) private aboutDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('expDiv', {static: false}) private expDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('eduDiv', {static: false}) private eduDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('portfolioDiv', {static: false}) private portDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('bulletinDiv', {static: false}) private bullDiv!: ElementRef<HTMLDivElement>;


  viewedElement: BehaviorSubject<string> = new BehaviorSubject('about');

  isScrolledIntoView(){
    console.log('scrolling')
    const aboutDiv = this.aboutDiv.nativeElement.getBoundingClientRect();
    const expDiv = this.expDiv.nativeElement.getBoundingClientRect();
    const eduDiv = this.eduDiv.nativeElement.getBoundingClientRect();
    const portDiv = this.portDiv.nativeElement.getBoundingClientRect();
    const bullDiv = this.bullDiv.nativeElement.getBoundingClientRect();
    if (aboutDiv.top <= 700) {
      this.viewedElement.next('about');
    } if (expDiv.top <= 700) {
      this.viewedElement.next('experience');
    } if (eduDiv.top <= 700) {
      this.viewedElement.next('education');
    } if (portDiv.top <= 700){
      this.viewedElement.next('portfolio');
    } if (bullDiv.top <= 700){
      this.viewedElement.next('bulletin');
    }

  }

  constructor(private persistence: PersistenceService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    interval(500).subscribe((val) => {
      this.isScrolledIntoView();
    });
  }
}
