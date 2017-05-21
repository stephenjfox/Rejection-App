import { Component, OnInit, Input } from '@angular/core';
import { Ask, AskStatus, askStatusToString } from '../ask/ask';

@Component({
  selector: 'ask-item',
  template: `
  <div class="item">
    Askee: <span>{{ask.askee}}</span>
    <br />
    Status: <span>{{askStatus}}</span>
  </div>
  `,
  styles: [``]
})
export class AskItemComponent implements OnInit {

  @Input() ask: Ask

  constructor() { }

  get askStatus(): string {
    return askStatusToString(this.ask.status)
  }

  ngOnInit() {
  }

}
