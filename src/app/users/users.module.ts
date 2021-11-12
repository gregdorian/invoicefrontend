import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
  ]
})
export class UsersModule { }
