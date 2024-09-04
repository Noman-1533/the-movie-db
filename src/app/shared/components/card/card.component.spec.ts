import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MultiCardComponent } from '../multi-card/multi-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedFacadeService } from '../../services/shared.facade.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AngularMaterialModule,NoopAnimationsModule,HttpClientTestingModule],
      declarations: [CardComponent,MultiCardComponent],
      providers:[SharedFacadeService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
