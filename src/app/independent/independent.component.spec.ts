import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentComponent } from './independent.component';

describe('IndependentComponent', () => {
  let component: IndependentComponent;
  let fixture: ComponentFixture<IndependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IndependentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
