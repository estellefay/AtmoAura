import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmoNowComponent } from './atmo-now.component';

describe('AtmoNowComponent', () => {
  let component: AtmoNowComponent;
  let fixture: ComponentFixture<AtmoNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmoNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmoNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
