import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpenterListingComponent } from './carpenter-listing.component';

describe('CarpenterListingComponent', () => {
  let component: CarpenterListingComponent;
  let fixture: ComponentFixture<CarpenterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpenterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpenterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
