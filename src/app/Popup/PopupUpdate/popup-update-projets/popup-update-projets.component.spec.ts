import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateProjetsComponent } from './popup-update-projets.component';

describe('PopupUpdateProjetsComponent', () => {
  let component: PopupUpdateProjetsComponent;
  let fixture: ComponentFixture<PopupUpdateProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUpdateProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdateProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
