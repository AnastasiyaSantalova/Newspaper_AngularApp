import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.scss']
})
export class ArtPageComponent implements OnInit {
  stats = [
    { value: 1208, label: 'poems' },
    { value: 754, label: 'pictures' },
    { value: 3992, label: 'songs' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
