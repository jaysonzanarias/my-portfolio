import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectListComponent } from './content/portfolio/project-list/project-list.component';
import { ProjectContainerComponent } from './content/portfolio/project-container/project-container.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { HomeComponent } from './content/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './content/skills/skills.component';
import { TutorialsComponent } from './content/tutorials/tutorials.component';
import { VlogComponent } from './content/vlog/vlog.component';
import { ContactComponent } from './content/contact/contact.component';
import { LiveProjectsComponent } from './content/live-projects/live-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    ProjectListComponent,
    ProjectContainerComponent,
    PortfolioComponent,
    HomeComponent,
    SkillsComponent,
    TutorialsComponent,
    VlogComponent,
    ContactComponent,
    LiveProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
