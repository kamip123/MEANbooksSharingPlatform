import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AllBooksComponent} from './all-books/all-books.component';

const routes: Routes = [
  { path: 'mainPage', component: MainPageComponent },
  { path: 'allBooks', component: AllBooksComponent },
  { path: '',
    redirectTo: '/mainPage',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
