import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaRegionComponent } from './ma-region.component';

describe('MaRegionComponent', () => {
  let component: MaRegionComponent;
  let fixture: ComponentFixture<MaRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
