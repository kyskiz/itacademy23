import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComponent } from './single.component';
import { SheepService } from '../../services/sheep.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Sheep } from '../../types';

describe('SingleComponent', () => {
  let component: SingleComponent;
  let fixture: ComponentFixture<SingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleComponent ],
      providers: [
        { provide: SheepService, useValue: {
          findSheep: (name: string): Observable<Sheep> => of(
            {  name: 'SheepName',
              title: 'Sheep title',
              tagline: 'Sheep tag'  }
          )}
        },
        // this.route.snapshot.paramMap.get('name')
        { provide: ActivatedRoute, useValue: {
          snapshot: {
            paramMap: {
              get: (name: string) => 'SheepName'
            }
          }
          } },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
