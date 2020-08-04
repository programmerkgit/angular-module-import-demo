import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildExportedComponent } from './grand-child-exported.component';

describe('GrandChildExportedComponent', () => {
  let component: GrandChildExportedComponent;
  let fixture: ComponentFixture<GrandChildExportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildExportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildExportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
