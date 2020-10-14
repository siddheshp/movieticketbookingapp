import { CustomerService } from './../../services/customer.service';
import { AuthService } from './../../services/auth.service';
import { Booking } from './../../models/booking';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: Booking[];

  constructor(private authService: AuthService,
    private customerService: CustomerService,
    private location: Location) { }

  ngOnInit(): void {
    const customerId = this.authService.getUser().customerId;
    
    this.customerService.getBookings(customerId).subscribe(result=>{
      this.bookings =result;
    }, err=> alert(JSON.stringify(err)));
  }

  goBack() {
    this.location.back();
  }
}
