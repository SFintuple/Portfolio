import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubixCabComponent } from './cubix-cab.component';

describe('CubixCabComponent', () => {
  let component: CubixCabComponent;
  let fixture: ComponentFixture<CubixCabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubixCabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubixCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
