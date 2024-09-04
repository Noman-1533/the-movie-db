import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { DescriptionComponent } from './description/description.component';
import { RecommendationComponent } from '../recommendation/recommendation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailsFacadeService } from '../../services/details.facade.service';
import { ContainerComponent } from '../../../../shared/components/container/container.component';
import { MultiCardComponent } from '../../../../shared/components/multi-card/multi-card.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule, // This is correctly added
    ],
    declarations: [
      MovieDetailsComponent,
      DescriptionComponent,
      RecommendationComponent,
      ContainerComponent,
      MultiCardComponent,
    ],
    providers: [
      
      DetailsFacadeService,
      provideMockStore({}),
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({ id: '123' }), // Mock route parameters
          snapshot: { paramMap: { get: (key: string) => '123' } }, // Mock snapshot
        },
      },
    ],
  }).compileComponents();

  fixture = TestBed.createComponent(MovieDetailsComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
