import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnChanges {
  projects;

  @Input()
  category;

  @Output()
  selected = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.projects = data;
  }

  ngOnChanges(): void {
    if (this.category.toLowerCase() != "all")
      this.projects = data.filter(project => project.type.includes(this.category.toLowerCase()));
    else
      this.projects = data;

    this.selected.emit(null);
  }

  setSelectedProject(project) {
    this.selected.emit(project);
  }

}

let data = [];