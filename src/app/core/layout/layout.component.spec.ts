import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './component/header/header.component';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterComponent } from './component/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageSelectorComponent } from './component/language-selector/language-selector.component';
describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,SharedModule,NoopAnimationsModule],
      declarations: [LayoutComponent,HeaderComponent,FooterComponent,LanguageSelectorComponent],
      providers:[SharedFacadeService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
