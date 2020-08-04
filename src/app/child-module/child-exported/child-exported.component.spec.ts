import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildExportedComponent } from './child-exported.component';

describe('ChildExportedComponent', () => {
  let component: ChildExportedComponent;
  let fixture: ComponentFixture<ChildExportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildExportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildExportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
