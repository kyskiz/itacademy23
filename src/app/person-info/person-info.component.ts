import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../types';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent {
  @Input() person: Person;
  @Output() onPersonNameClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  handleComponentPersonNameClick(event: MouseEvent) {
    this.onPersonNameClick.emit(event);
  }
}
