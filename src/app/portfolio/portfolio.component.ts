import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
     title: 'Notomato',
     description:'Pomodoro notes app built in Ionic & Angular frameworks, using Dexie.js to persist tasks/notes in IndexedDB',
     link: 'https://notomato.vercel.app/',
     img: 'https://i.imgur.com/5Z2ZQ8M.png'
    },
    {
      title: 'Proteux',
      description: 'Visualize CSV & JSON as a table. Hide, sort, modify, & export to CSV, JSON, TXT, or Markdown tables.',
      link: 'https://proteux.vercel.app/',
      img: 'https://i.imgur.com/5Z2ZQ8M.png'
    },
    {
      title: 'Casee',
      description: 'A note-keeper/time record for targeted case management or support broker billing that stores everything in a LiteDB database (UWP app).',
      link: 'https://github.com/TBosak/Casee-2.0',
      img: 'https://i.imgur.com/0Gwbsbi.png'
    },
    {
      title: 'Kanban Board',
      description: 'A basic Kanban board built in Angular, persists data in IndexedDB',
      link: 'https://angular-kanban-theta.vercel.app/',
      img: 'https://i.imgur.com/5Z2ZQ8M.png'
    }
  ]

  constructor() { }
}
