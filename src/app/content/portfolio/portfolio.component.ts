import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  category = "";
  selectedProject;
  copyrightYear: number;

  constructor() { }

  ngOnInit(): void {
    this.copyrightYear = new Date().getFullYear();
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
