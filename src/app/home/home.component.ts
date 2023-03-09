import { Component, OnInit } from '@angular/core';
import { Person } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  persons: Person[];
  person: Person;

  constructor() {
    this.persons = [
      { name: 'Michael', age: 43 },
      { name: 'Pam', age: 27 },
      { name: 'Jim', age: 28 },
      { name: 'Dwight', age: 31 },
      { name: 'Angela', age: 29 },
    ];
    this.person = this.persons[0];
  }

  ngOnInit() {

  }

  handlePersonNameClick(event: MouseEvent) {
    console.log(`Person name was clicked at [${event.x}, ${event.y}]`);
  }

}
