import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreezerTypeRoutingModule } from './freezer-type-routing.module';
import { FreezertypeIndexComponent } from './components/freezertype-index/freezertype-index.component';


@NgModule({
  declarations: [
    FreezertypeIndexComponent
  ],
  imports: [
    CommonModule,
    FreezerTypeRoutingModule
  ]
})
export class FreezerTypeModule { }
