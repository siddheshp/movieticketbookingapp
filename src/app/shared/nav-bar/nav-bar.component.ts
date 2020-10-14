import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  movieName: string = null;
  user = new User();
  navLinks = [
    {
      label: 'Signin',
      route: 'signin'
    },
    {
      label: 'SignUp',
      route: 'signup'
    },
    {
      label: 'Forgot Password',
      route: 'forgotPassword'
    }
  ];

  customerNavLinks = [
    {
      label: 'Home',
      route: 'customer',
    },
    {
      label: 'My Bookings',
      route: 'bookings',
    },
    {
      label: 'My Profile',
      route: 'profile',
    },
    {
      label: 'Reset Password',
      route: 'resetPassword',
    },
    {
      label: 'Logout',
      route: 'signin',
    },
  ];
  
  adminNavLinks = [
    {
      label: 'Dashboard',
      route: 'admin',
    },
    {
      label: 'Add Theatre',
      route: 'theatre',
    },
    {
      label: 'Add Movie',
      route: 'movie',
    },
    {
      label: 'My Profile',
      route: 'profile',
    },
    {
      label: 'Reset Password',
      route: 'resetPassword',
    },
    {
      label: 'Logout',
      route: 'signin',
    },
  ];

  constructor(private authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {
    // subscribe to user of authservice
    this.authService.user.subscribe(user => {
      this.user = user;
      this.updateNavLinks();
    })
  }

  updateNavLinks() {
    if (this.user && this.user.userTypeId === 2) { //admin
      this.navLinks = this.adminNavLinks;
    } else {
      this.navLinks = this.customerNavLinks;
    }
  }

  searchMovie(){
    //navigate to search route
    this.router.navigate([`/movie/search/${this.movieName}`]);
  }
}
