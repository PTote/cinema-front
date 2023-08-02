import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticSliderComponent } from './automatic-slider.component';

describe('AutomaticSliderComponent', () => {
  let component: AutomaticSliderComponent;
  let fixture: ComponentFixture<AutomaticSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomaticSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomaticSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
