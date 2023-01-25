import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/services/persistence.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title: string = 'About';
  constructor(private persistence: PersistenceService) { }

  ngOnInit() {
  }

}
