import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchableButtonComponent } from './switchable-button.component';
import { SharedFacadeService } from '../../services/shared.facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SwitchableButtonComponent', () => {
  let component: SwitchableButtonComponent;
  let fixture: ComponentFixture<SwitchableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [SwitchableButtonComponent],
      providers:[SharedFacadeService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
