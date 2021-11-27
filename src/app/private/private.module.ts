import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  declarations: [
    PrivateComponent,
  ],
  imports: [
    CommonModule,RouterModule,
    PrivateRoutingModule,MaterialModule,
    SharedModule
  ]
})
export class PrivateModule { }
