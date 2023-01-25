import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu-card',
  templateUrl: './edu-card.component.html',
  styleUrls: ['./edu-card.component.scss']
})
export class EduCardComponent implements OnInit {
  @Input() school: string = '';
  @Input() degree: string = '';
  @Input() startdate: string = '';
  @Input() enddate: string = '';
  @Input() description: string = '';
  @Input() img: string = '';
  constructor() { }

  ngOnInit() {
  }

}
