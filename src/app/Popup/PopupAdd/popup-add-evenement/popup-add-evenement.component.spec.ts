import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddEvenementComponent } from './popup-add-evenement.component';

describe('PopupAddEvenementComponent', () => {
  let component: PopupAddEvenementComponent;
  let fixture: ComponentFixture<PopupAddEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
