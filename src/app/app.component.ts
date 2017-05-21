import { Component } from '@angular/core';

import { RejectionFormComponent } from './rejection-form/rejection-form.component'
import { Ask } from "./ask/ask";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private askList: Array<Ask> = [];
  private askToDisplay: Ask

  displayAsk(data: Ask) {
    console.log(`Received: ${JSON.stringify(data)}`)
    this.askList.push(data)
  }
}
