import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AstroListComponent } from './astro-list/astro-list.component';
import { AstroDetailComponent } from './astro-detail/astro-detail.component';
import { AstroItemComponent } from './astro-list/astro-item/astro-item.component';
import { AstroService } from './astro.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AstroListComponent,
    AstroDetailComponent,
    AstroItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [AstroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
