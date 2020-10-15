import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  opened = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  addNavbarColorEffects() {
    const navClassList = document.querySelector('#mat-toolbar').classList;
    const goToTopClassList = document.querySelector('#go-to-top').classList;
    const scrollY = window.scrollY;

    if (scrollY <= 10) {
      navClassList.remove("scroll");
      navClassList.add('noscroll')
    } else {
      navClassList.remove("noscroll");
      navClassList.add('scroll')

    }

    if (scrollY <= 500) {
      goToTopClassList.add('no-go-to-top');
      goToTopClassList.remove('go-to-top');
    } else {
      goToTopClassList.remove('no-go-to-top');
      goToTopClassList.add('go-to-top');
    }
  }
}
