import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTodoComponent } from './main-todo.component';

describe('MainTodoComponent', () => {
  let component: MainTodoComponent;
  let fixture: ComponentFixture<MainTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
