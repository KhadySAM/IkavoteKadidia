import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteEvenementComponent } from './popup-delete-evenement.component';

describe('PopupDeleteEvenementComponent', () => {
  let component: PopupDeleteEvenementComponent;
  let fixture: ComponentFixture<PopupDeleteEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeleteEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDeleteEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
