import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeletePaysComponent } from './popup-delete-pays.component';

describe('PopupDeletePaysComponent', () => {
  let component: PopupDeletePaysComponent;
  let fixture: ComponentFixture<PopupDeletePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeletePaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDeletePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
