import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSaadaComponent } from './input-saada.component';

describe('InputSaadaComponent', () => {
  let component: InputSaadaComponent;
  let fixture: ComponentFixture<InputSaadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSaadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSaadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
