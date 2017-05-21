import { Component, Output, EventEmitter } from '@angular/core';
import { Ask, AskStatus, askStatusToString, stringToStatus } from "app/ask/ask";

@Component({
  selector: 'rejection-form',
  template: `
    <div class="form-content">
      <p>
        rejection-form
      </p>
      <input #askee
              type="text"
              placeholder="Askee (who you asked)" /> <br/>
      <input #ask
              type="text"
              placeholder="What did you ask for?" /> <br/>
      <input #time
              type="date" /> <br/>
      <select #selection>
        <option *ngFor="let status of this.statuses">{{status}}</option>
      </select>
      <button (click)="buildAndEmitAsk(askee.value, ask.value, time.value, selection.value)">Submit</button>
    </div>
  `,
  styles: [`
    .form-content {
      border-color: blue;
      border-width: 4px;
    }
  `]
})
export class RejectionFormComponent {

  private statuses = [AskStatus.Accepted, AskStatus.Rejected].map(askStatusToString);

  @Output() askCreated = new EventEmitter<Ask>()

  constructor() { }

  buildAndEmitAsk(name: string, question: string, time: Date, status: string) {

    console.log("Status came back as:", status)
    const transformed = stringToStatus(status)
    console.log("tranformed =", transformed);

    if (name && question && time) {
      this.askCreated.emit({ 
        ask: question,
        timestamp: time,
        askee: name,
        status: transformed
      })
    }
  }
}
