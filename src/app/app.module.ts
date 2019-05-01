import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AtmoTestComponent } from './atmo-test/atmo-test.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PrevisionComponent } from './prevision/prevision.component';
import { MaRegionComponent } from './ma-region/ma-region.component';
import { AtmoNowComponent } from './atmo-now/atmo-now.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AtmoTestComponent,
    SearchBarComponent,
    PrevisionComponent,
    MaRegionComponent,
    AtmoNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }