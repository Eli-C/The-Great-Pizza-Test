import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngredientsListComponent } from './view-ingredients-list.component';

describe('ViewIngredientsListComponent', () => {
  let component: ViewIngredientsListComponent;
  let fixture: ComponentFixture<ViewIngredientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIngredientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIngredientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
