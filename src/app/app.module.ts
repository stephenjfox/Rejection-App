import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { RejectionFormComponent } from './rejection-form/rejection-form.component';
import { AskItemComponent } from './ask-item/ask-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    RejectionFormComponent,
    AskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
