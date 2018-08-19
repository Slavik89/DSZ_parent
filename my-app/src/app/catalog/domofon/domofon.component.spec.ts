import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomofonComponent } from './domofon.component';

describe('DomofonComponent', () => {
  let component: DomofonComponent;
  let fixture: ComponentFixture<DomofonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomofonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomofonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
