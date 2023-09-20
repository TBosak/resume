import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { PersistenceService } from 'src/services/persistence.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  intObserver: any;
  public appPages = [
    { title: 'About', url: '/#about', icon: 'information-circle', associated: 'about' },
    { title: 'Experience', url: '/#experience', icon: 'business', associated: 'experience' },
    { title: 'Education', url: '/#education', icon: 'school', associated: 'education' },
    { title: 'Portfolio', url: '/#portfolio', icon: 'briefcase', associated: 'portfolio' },
    { title: 'References', url: '/#bulletin', icon: 'chatbubbles', associated: 'bulletin' },
  ];

  viewedElement: BehaviorSubject<string> = new BehaviorSubject('about');


  constructor(private persistence: PersistenceService) {}

  ngOnInit() {
    const hidden = document.querySelectorAll('.hidden');
    this.intObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          this.viewedElement.next(entry.target.id);
        }
        else {
          entry.target.classList.remove('show');
        }
      });
    });
    hidden.forEach((item) => {
      this.intObserver.observe(item);
    });
  }

  ngAfterViewInit(): void {
  }
}
