import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedFacadeService } from '../../../../shared/services/shared.facade.service';
import { SharedModule } from '../../../../shared/shared.module';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,SharedModule,NoopAnimationsModule],
      declarations: [HeaderComponent,LanguageSelectorComponent ],
      providers: [
        SharedFacadeService,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
