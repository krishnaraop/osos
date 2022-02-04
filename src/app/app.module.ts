import { ContactService } from './contact.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactaddComponent } from './contactadd/contactadd.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    ContactaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
