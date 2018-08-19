import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YydComponent } from './yyd.component';

describe('YydComponent', () => {
  let component: YydComponent;
  let fixture: ComponentFixture<YydComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YydComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
