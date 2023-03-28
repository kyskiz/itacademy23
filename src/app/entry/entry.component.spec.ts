import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryComponent } from './entry.component';
import { Router } from '@angular/router';

describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;
  let routerMock = {
    navigate: (path: string[]):void => {}
   };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryComponent ],
      providers: [
        { provide: Router, useValue: routerMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleNavigation()', () => {
    beforeEach(() => {
      spyOn(component, 'handleNavigation').and.callThrough();
      spyOn(routerMock, 'navigate');
    });

    it('should trigger nagleNavigation with param false', () => {

      // component.handleNavigation(false);
      const nativeObject = fixture.debugElement.nativeElement;
      nativeObject.querySelector('#p3').click();

      expect(component.handleNavigation).toHaveBeenCalled();
      expect(routerMock.navigate).not.toHaveBeenCalled();
    });

    it('should trigger nagleNavigation with param true', () => {

      const nativeObject = fixture.debugElement.nativeElement;
      nativeObject.querySelector('#p2').click();

      expect(component.handleNavigation).toHaveBeenCalled();
      expect(routerMock.navigate).toHaveBeenCalled();
    });


  });
});
