import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContainerComponent } from './home-page-container.component';
import { ContainerComponent } from '../../../../shared/components/container/container.component';
import { SwitchableButtonComponent } from '../../../../shared/components/switchable-button/switchable-button.component';
import { MultiCardComponent } from '../../../../shared/components/multi-card/multi-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomePageContainerComponent', () => {
  let component: HomePageContainerComponent;
  let fixture: ComponentFixture<HomePageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [HomePageContainerComponent,ContainerComponent,SwitchableButtonComponent,MultiCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
