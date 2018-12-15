import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProblemsModule } from './problems/problems.module';

const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'problems', loadChildren: './problems/problems.module#ProblemsModule'},
	{path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes), ProblemsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }