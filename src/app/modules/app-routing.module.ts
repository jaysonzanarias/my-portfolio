import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from '../content/portfolio/portfolio.component';
import { HomeComponent } from '../content/home/home.component';
import { SkillsComponent } from '../content/skills/skills.component';
import { TutorialsComponent } from '../content/tutorials/tutorials.component';
import { VlogComponent } from '../content/vlog/vlog.component';
import { ContactComponent } from '../content/contact/contact.component';
import { LiveProjectsComponent } from '../content/live-projects/live-projects.component';
import { ProjectDetailsComponent } from '../content/portfolio/project-details/project-details.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: "portfolio/:id", component: ProjectDetailsComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'vlog', component: VlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'live-projects', component: LiveProjectsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
