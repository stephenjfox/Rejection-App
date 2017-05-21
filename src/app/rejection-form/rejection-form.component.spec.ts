import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionFormComponent } from './rejection-form.component';

describe('RejectionFormComponent', () => {
  let component: RejectionFormComponent;
  let fixture: ComponentFixture<RejectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
