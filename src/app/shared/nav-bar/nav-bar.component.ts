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
      label: 'Add Movie',
      route: 'movie',
    },
    {
      label: 'Add Theatre',
      route: 'theatre',
    },
    {
      label: 'Logout',
      route: 'signin',
    },
  ];

  constructor(private authService: AuthService) { }

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

  }
}
