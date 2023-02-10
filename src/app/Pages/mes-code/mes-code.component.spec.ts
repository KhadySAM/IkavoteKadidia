import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCodeComponent } from './mes-code.component';

describe('MesCodeComponent', () => {
  let component: MesCodeComponent;
  let fixture: ComponentFixture<MesCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
