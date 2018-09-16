import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdesignsViewComponent } from './workdesigns-view.component';

describe('WorkdesignsViewComponent', () => {
  let component: WorkdesignsViewComponent;
  let fixture: ComponentFixture<WorkdesignsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdesignsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdesignsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
