import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { SharedModule } from '../../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListFacadeService } from '../../services/list-facade.service';
import { SharedFacadeService } from '../../../../shared/services/shared.facade.service';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule,NoopAnimationsModule,HttpClientTestingModule,FormsModule],
      declarations: [FilterComponent],
      providers:[ListFacadeService,SharedFacadeService,provideMockStore({}),{
        provide: ActivatedRoute,
        useValue: {
          params: of({ id: '123' }), // Mock route parameters
          snapshot: { paramMap: { get: (key: string) => '123' } }, // Mock snapshot
        },
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
