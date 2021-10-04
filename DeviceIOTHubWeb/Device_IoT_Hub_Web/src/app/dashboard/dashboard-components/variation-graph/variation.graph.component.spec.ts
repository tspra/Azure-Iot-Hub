import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { variationgraphcomponent } from './variationgraphcomponent';

describe('variationgraphcomponent', () => {
  let component: variationgraphcomponent;
  let fixture: ComponentFixture<variationgraphcomponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ variationgraphcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(variationgraphcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
