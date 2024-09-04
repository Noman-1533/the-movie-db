import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundOverlayComponent } from './background-overlay.component';

describe('BackgroundOverlayComponent', () => {
  let component: BackgroundOverlayComponent;
  let fixture: ComponentFixture<BackgroundOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
