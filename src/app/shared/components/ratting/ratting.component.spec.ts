import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MultiCardComponent } from '../multi-card/multi-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedFacadeService } from '../../services/shared.facade.service';
import { RattingComponent } from './ratting.component';

describe('RattingComponent', () => {
  let component: RattingComponent;
  let fixture: ComponentFixture<RattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AngularMaterialModule,NoopAnimationsModule,HttpClientTestingModule],
      declarations: [RattingComponent,],
      providers:[SharedFacadeService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
