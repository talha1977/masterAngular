import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgainCheckHttpComponent } from './again-check-http.component';

describe('AgainCheckHttpComponent', () => {
  let component: AgainCheckHttpComponent;
  let fixture: ComponentFixture<AgainCheckHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgainCheckHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgainCheckHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
