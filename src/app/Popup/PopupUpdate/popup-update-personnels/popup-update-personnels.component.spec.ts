import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdatePersonnelsComponent } from './popup-update-personnels.component';

describe('PopupUpdatePersonnelsComponent', () => {
  let component: PopupUpdatePersonnelsComponent;
  let fixture: ComponentFixture<PopupUpdatePersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUpdatePersonnelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdatePersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
