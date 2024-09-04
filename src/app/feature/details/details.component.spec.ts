import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DescriptionComponent } from './components/movie-details/description/description.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { MultiCardComponent } from '../../shared/components/multi-card/multi-card.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [DetailsComponent,MovieDetailsComponent,DescriptionComponent,RecommendationComponent,ContainerComponent,MultiCardComponent],
      providers:[provideMockStore({}),
        {
          provide:ActivatedRoute,
          useValue:{
            params: of({ id: '123' }), // Mock route parameters
            snapshot: { paramMap: { get: (key: string) => '123' } }, // Mock snapshot
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
