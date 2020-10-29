import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnChanges {
  projects = [];
  selectedProject;

  @Input()
  category;

  @Output()
  onSelect = new EventEmitter;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.projects = this.data.getData();
  }

  ngOnChanges(): void {
    if (this.category.toLowerCase() != "all")
      this.projects = this.data.getData().filter(project => project.type.includes(this.category.toLowerCase()));
    else
      this.projects = this.data.getData();

    this.onSelect.emit(null);
    this.selectedProject = null;
  }

  setSelectedProject(project) {
    this.onSelect.emit(project);
    this.selectedProject = project;
  }

}