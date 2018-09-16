import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdesignsTableComponent } from './workdesigns-table.component';

describe('WorkdesignsTableComponent', () => {
  let component: WorkdesignsTableComponent;
  let fixture: ComponentFixture<WorkdesignsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdesignsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdesignsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
