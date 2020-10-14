import { BookingRequest } from './../../models/booking-request';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.css']
})
export class BookMovieComponent implements OnInit {
  booking: BookingRequest;

  constructor(private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    //http://localhost:4200/movie/book?customerId=2&movieId=1&name=Dangal&theatreId=1&noOfSeats=3&bookingDate=2020-10-14
    this.route.queryParams.subscribe(bookingParams => {
      this.booking = JSON.parse(JSON.stringify(bookingParams));
      console.log(this.booking);
    }, err => alert(JSON.stringify(err)));
  }

  goBack() {
    this.location.back();
  }

  bookMovie() {
    //customer service -> bookMovie
    this.booking = JSON.parse(JSON.stringify(this.booking));
    delete this.booking.name;
    delete this.booking.ticketPrice;
    console.log(this.booking);
    this.customerService.bookMovie(this.booking).pipe().subscribe(result => {
      alert('Booking completed');
      this.router.navigate(['/customer']);
    }, err => alert(JSON.stringify(err)));
  }
}
