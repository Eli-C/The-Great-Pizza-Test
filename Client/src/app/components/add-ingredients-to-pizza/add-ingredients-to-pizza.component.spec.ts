import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientsToPizzaComponent } from './add-ingredients-to-pizza.component';

describe('AddIngredientsToPizzaComponent', () => {
  let component: AddIngredientsToPizzaComponent;
  let fixture: ComponentFixture<AddIngredientsToPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngredientsToPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientsToPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
