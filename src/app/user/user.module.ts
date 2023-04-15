import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

import { UserIndexComponent } from './components/user-index/user-index.component';

@NgModule({
  declarations: [UserIndexComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ],
})
export class UserModule {}
