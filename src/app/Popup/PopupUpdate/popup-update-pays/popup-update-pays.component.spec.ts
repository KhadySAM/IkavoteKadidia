import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdatePaysComponent } from './popup-update-pays.component';

describe('PopupUpdatePaysComponent', () => {
  let component: PopupUpdatePaysComponent;
  let fixture: ComponentFixture<PopupUpdatePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUpdatePaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdatePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
