import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeletePersonnelsComponent } from './popup-delete-personnels.component';

describe('PopupDeletePersonnelsComponent', () => {
  let component: PopupDeletePersonnelsComponent;
  let fixture: ComponentFixture<PopupDeletePersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeletePersonnelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDeletePersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
