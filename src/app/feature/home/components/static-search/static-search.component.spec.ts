import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSearchComponent } from './static-search.component';
import { SharedModule } from '../../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('StaticSearchComponent', () => {
  let component: StaticSearchComponent;
  let fixture: ComponentFixture<StaticSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule,NoopAnimationsModule,HttpClientTestingModule,FormsModule],
      declarations: [StaticSearchComponent],
      providers:[{
        provide:ActivatedRoute,
        useValue:{
          params: of({ id: '123' }), // Mock route parameters
          snapshot: { paramMap: { get: (key: string) => '123' } }, // Mock snapshot
        }
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
