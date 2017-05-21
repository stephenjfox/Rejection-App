import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ask, AskStatus } from '../ask/ask';
import { AskItemComponent } from './ask-item.component';

describe('AskItemComponent', () => {
  let component: AskItemComponent;
  let fixture: ComponentFixture<AskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskItemComponent);
    component = fixture.componentInstance;
    component.ask = {
      timestamp: new Date(),
      ask: 'Can I have a car?',
      askee: 'Tyler Jones',
      status: AskStatus.Accepted
    };

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an ask', () => {
    expect(component.ask).toBeTruthy();
  })
});
