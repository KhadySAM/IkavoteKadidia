import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateEvenementComponent } from './popup-update-evenement.component';

describe('PopupUpdateEvenementComponent', () => {
  let component: PopupUpdateEvenementComponent;
  let fixture: ComponentFixture<PopupUpdateEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUpdateEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdateEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
