import { CustomInterceptor } from './shared/custom-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin/admin.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { AddTheatreComponent } from './admin/add-theatre/add-theatre.component';
import { MovieCardComponent } from './customer/movie-card/movie-card.component';
import { MovieDetailsComponent } from './customer/movie-details/movie-details.component';
import { DurationPipe } from './shared/duration.pipe';
import { ViewShowsComponent } from './customer/view-shows/view-shows.component';
import { BookMovieComponent } from './customer/book-movie/book-movie.component';
import { MyBookingsComponent } from './customer/my-bookings/my-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavBarComponent,
    AdminComponent,
    CustomerComponent,
    AddmovieComponent,
    AddTheatreComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    DurationPipe,
    ViewShowsComponent,
    BookMovieComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
