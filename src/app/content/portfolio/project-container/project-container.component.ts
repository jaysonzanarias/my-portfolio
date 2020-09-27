import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {
  @Input() selectedProject;

  imagePath: string = "assets/images/project_images/";

  constructor() { }

  ngOnInit(): void {
  }

}
