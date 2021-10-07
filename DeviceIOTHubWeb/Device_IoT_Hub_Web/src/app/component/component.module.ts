import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from './card/card.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ComponentsRoutes),
    NgbModule,
   
  ],
  declarations: [
    CardsComponent
  ]
})
export class ComponentsModule {}
