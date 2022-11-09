import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './main/film-detail.component';
import { CategoryDetailComponent } from './main/category-detail.component';
import { DefaultComponent } from './main/default.component';
import { AddFilmComponent } from './add-film/add-film.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'add-film', component: AddFilmComponent },
  {
    path: 'category/:id', component: CategoryDetailComponent, children: [
      { path: 'film-detail/:id', component: FilmDetailComponent },
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
