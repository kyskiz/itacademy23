import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

  constructor(private router: Router) {
  }

  handleDare(event: MouseEvent) {
    console.log('Very brave', event);
  }

  handleNavigation(shouldNavigate: boolean) {
    if (shouldNavigate) this.router.navigate(['/sheep']);
  }

}
