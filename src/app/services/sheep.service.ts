import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sheep, SheepDetailed } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SheepService {
  constructor(private httpClient: HttpClient) {}

  gatherFlock() {
    return this.httpClient.get<Sheep[]>('https://baal.fdp.workers.dev/sheep');
  }

  findSheep(name: string):Observable<SheepDetailed> {
    return this.httpClient.get<SheepDetailed>(
      'https://baal.fdp.workers.dev/sheep/' + name
    );
  }
}
