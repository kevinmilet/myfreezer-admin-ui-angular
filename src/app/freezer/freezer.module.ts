import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreezerRoutingModule } from './freezer-routing.module';
import { FreezerIndexComponent } from './components/freezer-index/freezer-index.component';


@NgModule({
  declarations: [
    FreezerIndexComponent
  ],
  imports: [
    CommonModule,
    FreezerRoutingModule
  ]
})
export class FreezerModule { }
