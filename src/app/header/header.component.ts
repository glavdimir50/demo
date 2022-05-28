import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  keyword = '23';

  constructor() {}

  ngOnInit(): void {}

  highlightTitle = false;
  fontSize = 24;
  search($event) {
    console.log($event);

    this.highlightTitle = !this.highlightTitle;
    this.fontSize++;
  }
}
