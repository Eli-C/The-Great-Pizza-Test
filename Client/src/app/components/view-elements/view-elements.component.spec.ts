import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewElementsComponent } from './view-elements.component';

describe('ViewElementsComponent', () => {
  let component: ViewElementsComponent;
  let fixture: ComponentFixture<ViewElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
