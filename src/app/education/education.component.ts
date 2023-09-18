import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CHSImg, SEMOImg } from '../constants';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, AfterViewInit {
  intObserver: any;
  display: boolean = false;
  @ViewChild('player') dotlottie: any | undefined;
  schools: any[] = [
    {title: 'Southeast Missouri State University',
    degree: "Bachelor's Degree, Political Science",
    img: SEMOImg,
    startdate: '2008',
    enddate: '2014',
    description: 'Minor in Art/Art History. Mostly studied comparative political systems and political theory, as well as political parties and voting behavior.',},
    {title: 'Cape Central Senior High School',
    degree: "High School Diploma",
    img: CHSImg,
    startdate: '2004',
    enddate: '2008',
    description: "Activities and societies: Future Business Leaders of America, Political Interest Group, Film and Literature Club, Spanish Club. Focused primarily on practical arts electives and excelled at Computer Programming, Advanced Computer Applications, Keyboarding, and Web Page Design.",}]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
