import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddPersonnelsComponent } from './popup-add-personnels.component';

describe('PopupAddPersonnelsComponent', () => {
  let component: PopupAddPersonnelsComponent;
  let fixture: ComponentFixture<PopupAddPersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddPersonnelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddPersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
