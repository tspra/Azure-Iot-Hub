// import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PatientService } from './service/patient.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/patient.effect';

   

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
	  PerfectScrollbarModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false, relativeLinkResolution: 'legacy' }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
   
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
