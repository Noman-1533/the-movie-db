import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionComponent } from './description.component';
import { DetailsFacadeService } from '../../../services/details.facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '../../../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundOverlayComponent } from '../../../../../shared/components/background-overlay/background-overlay.component';
describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,SharedModule,NoopAnimationsModule],
      declarations: [DescriptionComponent,BackgroundOverlayComponent],
      providers:[DetailsFacadeService,provideMockStore({})],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
