import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddPaysComponent } from './popup-add-pays.component';

describe('PopupAddPaysComponent', () => {
  let component: PopupAddPaysComponent;
  let fixture: ComponentFixture<PopupAddPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddPaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
