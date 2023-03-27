import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SheepService } from '../services/sheep.service';
import { Sheep } from '../types';

@Component({
  selector: 'app-sheep',
  templateUrl: './sheep.component.html',
  styleUrls: ['./sheep.component.scss'],
})
export class SheepComponent {
  sheep$: Observable<Sheep[]>;
  constructor(private sheepService: SheepService) {
    this.sheep$ = this.sheepService.gatherFlock();
  }
}
