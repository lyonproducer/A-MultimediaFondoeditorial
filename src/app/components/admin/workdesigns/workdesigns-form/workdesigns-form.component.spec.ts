import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdesignsFormComponent } from './workdesigns-form.component';

describe('WorkdesignsFormComponent', () => {
  let component: WorkdesignsFormComponent;
  let fixture: ComponentFixture<WorkdesignsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdesignsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdesignsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
