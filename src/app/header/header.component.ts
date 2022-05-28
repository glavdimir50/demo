import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  keyword = '';

  highlightTitle = false;
  fontSize = 24;

  constructor() {}

  ngOnInit(): void {}

  search(event: MouseEvent) {
    console.log(event.clientX);

    this.highlightTitle = !this.highlightTitle;
    this.fontSize++;
  }
}
