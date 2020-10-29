import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projects = [];
  selectedProject;

  constructor(private route: ActivatedRoute,
    private data: DataService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // TODO: to refactor when data is coming from actual backend services.
    this.projects = this.data.getData();
    this.selectedProject = this.projects.find(el => el.name.replace(/[^a-zA-Z-]+/g, "-").replace(/-$/g, "") == id);

    console.log(this.selectedProject);
  }
}
