import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { JobCardComponent } from './job-card/job-card.component';
import { EduCardComponent } from './edu-card/edu-card.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BulletinDialogComponent } from './bulletin-dialog/bulletin-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SafePipe } from './pipes/safe.pipe';
import { TypingPipe } from './pipes/typing.pipe';

@NgModule({
  declarations: [
      AppComponent,
      AboutComponent,
      EducationComponent,
      SkillsComponent,
      HeaderComponent,
      HistoryComponent,
      JobCardComponent,
      EduCardComponent,
      BulletinComponent,
      PortfolioComponent,
      BulletinDialogComponent,
      SafePipe,
      TypingPipe
   ],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, IonicModule.forRoot(), FlexLayoutModule, HttpClientModule, MatGridListModule, MatDialogModule, MatFormFieldModule, MatInputModule, ScrollingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  entryComponents: [BulletinDialogComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule {}
