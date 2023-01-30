import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeauthComponent } from './typeauth.component';

describe('TypeauthComponent', () => {
  let component: TypeauthComponent;
  let fixture: ComponentFixture<TypeauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeauthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
