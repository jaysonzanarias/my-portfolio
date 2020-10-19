import { OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  copyrightYear: number;
  opened = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.copyrightYear = new Date().getFullYear();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
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
      goToTopClassList.add('hide-go-to-top');
      goToTopClassList.remove('go-to-top');
    } else {
      goToTopClassList.remove('hide-go-to-top');
      goToTopClassList.add('go-to-top');
    }
  }
}
