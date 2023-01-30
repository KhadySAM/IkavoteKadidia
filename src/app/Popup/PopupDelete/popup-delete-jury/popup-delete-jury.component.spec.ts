import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteJuryComponent } from './popup-delete-jury.component';

describe('PopupDeleteJuryComponent', () => {
  let component: PopupDeleteJuryComponent;
  let fixture: ComponentFixture<PopupDeleteJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeleteJuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDeleteJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
