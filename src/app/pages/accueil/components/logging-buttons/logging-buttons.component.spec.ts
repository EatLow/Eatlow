import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingButtonsComponent } from './logging-buttons.component';

describe('LoggingButtonsComponent', () => {
  let component: LoggingButtonsComponent;
  let fixture: ComponentFixture<LoggingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
