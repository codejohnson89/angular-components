import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink = './';
  data = [
    { name: 'james', age: 24, job: 'designer', employed: false},
    { name: 'micah', age: 41, job: 'engineer', employed: true},
    { name: 'jones', age: 55, job: 'manager', employed: false}
  ];

  headers = [
    { key: "employed", label: "Working"},
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
