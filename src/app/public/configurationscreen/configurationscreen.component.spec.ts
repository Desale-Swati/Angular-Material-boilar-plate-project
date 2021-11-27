import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationscreenComponent } from './configurationscreen.component';

describe('ConfigurationscreenComponent', () => {
  let component: ConfigurationscreenComponent;
  let fixture: ComponentFixture<ConfigurationscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
