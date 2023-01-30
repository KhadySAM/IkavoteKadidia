import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateJuryComponent } from './popup-update-jury.component';

describe('PopupUpdateJuryComponent', () => {
  let component: PopupUpdateJuryComponent;
  let fixture: ComponentFixture<PopupUpdateJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUpdateJuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdateJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
