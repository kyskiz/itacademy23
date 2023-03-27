import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';
import { SheepService } from 'src/app/services/sheep.service';
import { SheepDetailed } from 'src/app/types';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent {
  sheep$?: Observable<SheepDetailed>;
  constructor(private service: SheepService, private route: ActivatedRoute) {
    //"Simple" solution
    const name = this.route.snapshot.paramMap.get('name');
    if (name !== null) {
      this.sheep$ = this.service.findSheep(name);
    }

    //Observable solution
    // this.sheep$ = this.route.paramMap.pipe(
    //   map((params: ParamMap) => params.get('name')),
    //   filter((param): param is string => param !== null),
    //   switchMap((name: string) => this.service.findSheep(name))
    // );
  }
}
