import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdesignsAvancedSearchComponent } from './workdesigns-avanced-search.component';

describe('WorkdesignsAvancedSearchComponent', () => {
  let component: WorkdesignsAvancedSearchComponent;
  let fixture: ComponentFixture<WorkdesignsAvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdesignsAvancedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdesignsAvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
