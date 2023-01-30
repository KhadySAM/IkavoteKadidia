import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateAuthentificationComponent } from './popup-update-authentification.component';

describe('PopupUpdateAuthentificationComponent', () => {
  let component: PopupUpdateAuthentificationComponent;
  let fixture: ComponentFixture<PopupUpdateAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUpdateAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdateAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
