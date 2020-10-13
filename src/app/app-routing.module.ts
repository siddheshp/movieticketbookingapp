import { BookMovieComponent } from './customer/book-movie/book-movie.component';
import { ViewShowsComponent } from './customer/view-shows/view-shows.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { AddTheatreComponent } from './admin/add-theatre/add-theatre.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './customer/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'customer', component: CustomerComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
  // { path: 'movie/:id', pathMatch: 'full', component: MovieDetailsComponent, canActivate: [AuthGuardGuard] },

  { path: 'admin', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
  { path: 'theatre', component: AddTheatreComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
  // { path: 'movie', component: AddmovieComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },

  {
    path: 'movie', canActivate: [AuthGuardGuard],
    children: [
      { path: 'book', component: BookMovieComponent },
      { path: ':id/shows', component: ViewShowsComponent },
      { path: ':id', component: MovieDetailsComponent },
      { path: '', component: AddmovieComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
