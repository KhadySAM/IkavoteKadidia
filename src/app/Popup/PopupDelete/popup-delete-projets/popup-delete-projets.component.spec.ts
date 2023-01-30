import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteProjetsComponent } from './popup-delete-projets.component';

describe('PopupDeleteProjetsComponent', () => {
  let component: PopupDeleteProjetsComponent;
  let fixture: ComponentFixture<PopupDeleteProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeleteProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDeleteProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
