import { MyProfileComponent } from './shared/my-profile/my-profile.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { EditMovieComponent } from './admin/edit-movie/edit-movie.component';
import { SearchComponent } from './shared/search/search.component';
import { MyBookingsComponent } from './customer/my-bookings/my-bookings.component';
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
import { resetFakeAsyncZone } from '@angular/core/testing';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'profile', component: MyProfileComponent },
  
  { path: 'admin', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
  { path: 'theatre', component: AddTheatreComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },

  { path: 'customer', component: CustomerComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
  { path: 'bookings', component: MyBookingsComponent, canActivate: [AuthGuardGuard] },
  {
    path: 'movie', canActivate: [AuthGuardGuard],
    children: [
      { path: 'book', component: BookMovieComponent },
      { path: ':id/shows', component: ViewShowsComponent },
      { path: ':id', component: MovieDetailsComponent },
      { path: '', component: AddmovieComponent },
      { path: 'search/:movieName', component: SearchComponent },
      { path: 'edit/:id', component: EditMovieComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
