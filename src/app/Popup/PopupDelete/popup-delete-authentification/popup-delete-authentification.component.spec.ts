import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteAuthentificationComponent } from './popup-delete-authentification.component';

describe('PopupDeleteAuthentificationComponent', () => {
  let component: PopupDeleteAuthentificationComponent;
  let fixture: ComponentFixture<PopupDeleteAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeleteAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDeleteAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
