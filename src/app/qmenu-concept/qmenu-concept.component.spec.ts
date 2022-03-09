import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QmenuConceptComponent } from './qmenu-concept.component';

describe('QmenuConceptComponent', () => {
  let component: QmenuConceptComponent;
  let fixture: ComponentFixture<QmenuConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QmenuConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QmenuConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
