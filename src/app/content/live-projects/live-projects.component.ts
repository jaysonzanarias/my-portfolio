import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'live-projects',
  templateUrl: './live-projects.component.html',
  styleUrls: ['./live-projects.component.css']
})
export class LiveProjectsComponent implements OnInit {
  listOfStringToArrayOutput: string;

  constructor() { }

  ngOnInit(): void {
  }

  convertListOfStringToArray(input: string, charExceptions: string) {
    let lines = input.trim().split('\n');
    let size = lines.length;
    let output = '';

    const pattern = new RegExp('^[' + charExceptions + ']');

    lines.sort(function (a, b) {
      if (pattern.test(a) != pattern.test(b))
        return -1;
      else
        return a.localeCompare(b);

    })

    for (let i = 0; i < size; i++)
      output += '"' + lines[i] + (i < size - 1 ? '", ' : '"');

    this.listOfStringToArrayOutput = output;
  }
}
