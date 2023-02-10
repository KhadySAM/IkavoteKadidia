import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenererCodeComponent } from './generer-code.component';

describe('GenererCodeComponent', () => {
  let component: GenererCodeComponent;
  let fixture: ComponentFixture<GenererCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenererCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenererCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
