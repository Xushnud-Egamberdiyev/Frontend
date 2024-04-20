import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallComponent } from './companents/getall/getall.component';
import { GetByIdComponent } from './companents/get-by-id/get-by-id.component';
import { CreateComponent } from './companents/create/create.component';
import { UpdateComponent } from './companents/update/update.component';
import { DeleteComponent } from './companents/delete/delete.component';

const routes: Routes = [
  {path: 'home', redirectTo: 'getall', pathMatch: 'full'},
  {path: '', redirectTo: 'getall', pathMatch: 'full'},
  {path: 'getall', component: GetallComponent},
  {path: 'getbyid', component: GetByIdComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
