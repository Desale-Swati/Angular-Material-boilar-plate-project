import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsModificationEmailaddressComponent } from './contact-details-modification-emailaddress.component';

describe('ContactDetailsModificationEmailaddressComponent', () => {
  let component: ContactDetailsModificationEmailaddressComponent;
  let fixture: ComponentFixture<ContactDetailsModificationEmailaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsModificationEmailaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsModificationEmailaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
