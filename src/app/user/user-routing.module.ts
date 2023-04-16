import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: UserIndexComponent },
  { path: 'edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
