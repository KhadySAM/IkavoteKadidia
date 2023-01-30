import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddAuthentificationComponent } from './popup-add-authentification.component';

describe('PopupAddAuthentificationComponent', () => {
  let component: PopupAddAuthentificationComponent;
  let fixture: ComponentFixture<PopupAddAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
