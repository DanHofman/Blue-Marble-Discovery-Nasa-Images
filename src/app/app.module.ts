import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { DescriptionComponent } from './description/description.component';
import { GrabNasaService } from './grab-nasa.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [GrabNasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
