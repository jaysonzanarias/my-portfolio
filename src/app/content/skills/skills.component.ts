import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  imagePath: string = "assets/images/tech_icons/";

  image = {
    image_name: "pexels-jens-mahnke-776092.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
