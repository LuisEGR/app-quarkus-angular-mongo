import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/new', pathMatch: 'full' },
  { path: 'users-list', component: UsersPageComponent },
  { path: 'user/new', component: UsersNewComponent },
  { path: 'user/update', component: UserUpdateComponent, data : null }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }