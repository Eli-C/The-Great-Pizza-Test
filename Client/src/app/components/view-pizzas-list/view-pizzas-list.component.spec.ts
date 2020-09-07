import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPizzasListComponent } from './view-pizzas-list.component';

describe('ViewPizzasListComponent', () => {
  let component: ViewPizzasListComponent;
  let fixture: ComponentFixture<ViewPizzasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPizzasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPizzasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
