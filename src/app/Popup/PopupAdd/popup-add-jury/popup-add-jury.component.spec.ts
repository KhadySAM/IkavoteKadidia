import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddJuryComponent } from './popup-add-jury.component';

describe('PopupAddJuryComponent', () => {
  let component: PopupAddJuryComponent;
  let fixture: ComponentFixture<PopupAddJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddJuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
