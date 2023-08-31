import { Component } from '@angular/core';
import { PersistenceService } from 'src/services/persistence.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Experience', url: '/experience', icon: 'business' },
    { title: 'Education', url: '/education', icon: 'school' },
    { title: 'Portfolio', url: '/portfolio', icon: 'briefcase' },
    { title: 'Reviews', url: '/bulletin', icon: 'chatbubbles' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private persistence: PersistenceService) {}

  ngOnInit() {
  }
}
