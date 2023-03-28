import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepComponent } from './sheep.component';
import { SheepService } from '../services/sheep.service';
import { sheepServiceMock, sheepsMock } from '../mocks/sheepServiceMock';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SheepComponent', () => {
  let component: SheepComponent;
  let fixture: ComponentFixture<SheepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ SheepComponent ],
      providers: [
        { provide: SheepService, useValue: sheepServiceMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('sheep$', () => {
    it('should check if sheep are sheep we expect', (done) => {
      component.sheep$.subscribe((sheep) => {
        expect(sheep).toEqual(sheepsMock);
        done();
      });
    })
  });
});
