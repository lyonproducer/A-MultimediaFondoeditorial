import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdesignListComponent } from './workdesign-list.component';

describe('WorkdesignListComponent', () => {
  let component: WorkdesignListComponent;
  let fixture: ComponentFixture<WorkdesignListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdesignListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdesignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
