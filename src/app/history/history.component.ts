import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CCSOMOImg, CDImg, GRHSImg, VizImg } from '../constants';
import { IonCard } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit{
  display: boolean = false;
  @ViewChild('player') dotlottie: any | undefined;
  jobs: any[] = [
    {title: 'Software Engineer',
    company: 'Vizient, Inc.',
    img: VizImg,
    startdate: 'Dec. 2019',
    enddate: 'Present',
    description: "Building and maintaining applications with the purpose of improving efficiency in health care administration, logistics, analytics, etc. Angular 8+, .NET, MSSQL Server, Pulumi/Azure/Jenkins/Octopus CI/CD. Paired TDD, a mix of XP, Kanban, and Scrum.",
    skills: ["TypeScript","C#",
    "JavaScript","Full-Stack Development","Agile Methodologies",
    "Angular","Node.js",".NET","HTML","CSS","Microsoft SQL Server","Azure",
    "Git","Jenkins","PHI Management","Cypress","Docker"]},
    {title: 'Support Coordinator DD',
    company: 'Catholic Charities of Southern Missouri',
    img: CCSOMOImg,
    startdate: 'Dec. 2018',
    enddate: 'Dec. 2019',
    description: "DMH-contracted targeted case management for individuals with developmental disabilities. Helping to establish services for those individuals with provider agencies. Reviewing those services to ensure that the individuals’ needs are being fulfilled, and that services adhere to state guidelines and quality outcomes.",
    skills: ["Crisis Prevention","Microsoft Office","Record Keeping","Functional Assessments","PHI Management"]},
    {title: 'Primary Staff',
    company: 'Grace Reliant Health Services',
    img: GRHSImg,
    startdate: 'Aug. 2015',
    enddate: 'Dec. 2018',
    description: "Overseeing a group of direct support professionals providing care for consumers with developmental disabilities. Serving as an on-call emergency contact for multiple DMH homes. Managing consumer records, appointments, and funds. Assisting consumers with personal tasks, such as transportation, meal preparation, housekeeping, medication administration, and other routine care and upkeep. Fostering consumer independence in lifestyle management skills.",
    skills: ["Crisis Prevention","Microsoft Office","Record Keeping","Functional Assessments","PHI Management"]},
    {title: 'Support Staff',
    company: 'Consumer Direct',
    img: CDImg,
    startdate: 'July 2014',
    enddate: 'Aug. 2015',
    description: "Routinely assisting consumers with developmental disabilities, maintaining consumers'​ personal care, transporting consumers, encouraging healthy lifestyle choices, maintaining proper sanitation, housekeeping, meal preparation, medication administration, and extensive record keeping.",
    skills: ["Record Keeping","PHI Management"]},
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dotlottie?.nativeElement.addEventListener('complete', () => {
    //   this.display = true;
    // });
  }

}
