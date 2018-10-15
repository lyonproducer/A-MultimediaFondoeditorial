import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdesignsSearchComponent } from './workdesigns-search.component';

describe('WorkdesignsSearchComponent', () => {
  let component: WorkdesignsSearchComponent;
  let fixture: ComponentFixture<WorkdesignsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdesignsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdesignsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
