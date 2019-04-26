import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmoTestComponent } from './atmo-test.component';

describe('AtmoTestComponent', () => {
  let component: AtmoTestComponent;
  let fixture: ComponentFixture<AtmoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
