import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() jobtitle: string = '';
  @Input() company: string = '';
  @Input() startdate: string = '';
  @Input() enddate: string = '';
  @Input() description: string = '';
  @Input() skills: string[] = [];
  @Input() img: string = '';
  constructor() { }

  ngOnInit() {
  }

}
