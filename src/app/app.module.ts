import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from './modules/angular-material.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ProjectListComponent } from './content/portfolio/project-list/project-list.component';
import { ProjectContainerComponent } from './content/portfolio/project-container/project-container.component';
import { ProjectDetailsComponent } from './content/portfolio/project-details/project-details.component';
import { PortfolioComponent, RemoveUnderscorePipe } from './content/portfolio/portfolio.component';
import { HomeComponent } from './content/home/home.component';
import { SkillsComponent } from './content/skills/skills.component';
import { TutorialsComponent } from './content/tutorials/tutorials.component';
import { VlogComponent } from './content/vlog/vlog.component';
import { ContactComponent } from './content/contact/contact.component';
import { LiveProjectsComponent } from './content/live-projects/live-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ProjectListComponent,
    ProjectContainerComponent,
    PortfolioComponent,
    RemoveUnderscorePipe,
    HomeComponent,
    SkillsComponent,
    TutorialsComponent,
    VlogComponent,
    ContactComponent,
    LiveProjectsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
