import { Component, OnInit } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';

import { DataService } from '../../services/data.service';

@Pipe({ name: 'removeUnderscore' })
export class RemoveUnderscorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.replace(/[^a-zA-Z-]+/g, "-").replace(/-$/g, "");
  }
}

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = [];
  category = "";
  selectedProject;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.projects = this.data.getData();
  }

  setSelected(project) {
    this.selectedProject = project;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  setCategory(category: string) {
    this.category = category;
    console.log(this.category);
  }
}