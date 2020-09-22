import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  addNavbarColorEffects() {
    const nav = document.querySelector('#mat-toolbar');

    if (window.scrollY <= 10) {
      nav.classList.remove("scroll");
      nav.classList.add('noscroll')
    } else {
      nav.classList.remove("noscroll");
      nav.classList.add('scroll')
    }
  }
}
