import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politics-page',
  templateUrl: './politics-page.component.html',
  styleUrls: ['./politics-page.component.css']
})
export class PoliticsPageComponent implements OnInit {
  data = [
    { name: 'Steve Jobs', raiting: '51%', job: 'manager' },
    { name: 'Bon Jovi', raiting: '35%', job: 'singer' },
    { name: 'Michael Kors', raiting: '12%', job: 'designer' },
    { name: 'Other', raiting: '2%', job: '-' },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'job', label: 'Job' },
    { key: 'raiting', label: 'Rating' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
