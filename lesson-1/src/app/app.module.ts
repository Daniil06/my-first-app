import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { CardEditComponent } from './card-edit/card-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CardEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatCardModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
