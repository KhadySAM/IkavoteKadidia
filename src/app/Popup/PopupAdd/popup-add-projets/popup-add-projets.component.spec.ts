import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddProjetsComponent } from './popup-add-projets.component';

describe('PopupAddProjetsComponent', () => {
  let component: PopupAddProjetsComponent;
  let fixture: ComponentFixture<PopupAddProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
