import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresComponent } from './criteres.component';

describe('CriteresComponent', () => {
  let component: CriteresComponent;
  let fixture: ComponentFixture<CriteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
