import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 500000, label: 'Revenue' },
    { value: 5600, label: 'Reviews' }
  ];

  items = [
    { image: '/assets/images/couch.jpeg', title: 'couch', description: 'This couch is awesome!'},
    { image: '/assets/images/dresser.jpeg', title: 'dresser', description: 'I can fit alot in here!'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
