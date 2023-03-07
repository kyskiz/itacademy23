import { Component, Input } from '@angular/core';
import { Person } from '../types';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent {
  @Input() person: Person;
}
