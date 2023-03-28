import { Sheep, SheepDetailed } from '../types';
import { SheepService } from '../services/sheep.service';
import { Observable, of } from 'rxjs';

export const sheepsMock: Sheep[] = [
  { name: 'Sheep1', tagline: 'tag1', title: 'title1' },
  { name: 'Sheep2', tagline: 'tag2', title: 'title2' },
  { name: 'Sheep3', tagline: 'tag3', title: 'title3' },
  { name: 'Sheep4', tagline: 'tag4', title: 'title4' },
];

export const sheepServiceMock: SheepService = {
  gatherFlock(): Observable<Sheep[]> {
    return of(sheepsMock)
  },
  findSheep(name: string): Observable<SheepDetailed> {
    const mySheep = sheepsMock
      .find((s) => s.name === name) as unknown as SheepDetailed;

    return of(mySheep);
  }
} as SheepService;
