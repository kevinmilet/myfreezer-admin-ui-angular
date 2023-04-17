import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../utils/pipes/filter.pipe';

@NgModule({
  declarations: [UserIndexComponent, UserEditComponent, FilterPipe],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UserModule {}
