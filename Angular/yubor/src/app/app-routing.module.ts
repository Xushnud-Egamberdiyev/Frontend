import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiqarComponent } from './companents/chiqar/chiqar.component';

const routes: Routes = [
  {path: 'chiqar', component: ChiqarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
