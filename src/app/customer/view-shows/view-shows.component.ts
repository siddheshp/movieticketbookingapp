import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Theatre } from './../../models/theatre';
import { Movie } from 'src/app/models/movie';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-view-shows',
  templateUrl: './view-shows.component.html',
  styleUrls: ['./view-shows.component.css'],
  providers: [DatePipe]
})
export class ViewShowsComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  movie: Movie;
  noOfSeats = 1;
  bookingDate: string;
  theatres: Theatre[];

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private authService: AuthService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    //http://localhost:4200/movie/1/shows

    //get theatre list
    this.customerService.getAllTheatres().subscribe(theatreList => {
      this.theatres = theatreList;
    }, err => alert(JSON.stringify(err)))

    this.route.params.subscribe(params => {
      this.customerService.getMovie(params.id).subscribe(result => {
        this.movie = result;
      }, err => alert(JSON.stringify(err)));
    }, err => alert(JSON.stringify(err)));
  }
  goBack() {
    this.location.back();
  }

  book(theatreId: number) {
    this.router.navigate(['/movie/book'], {
      queryParams: {
        customerId: this.authService.getUser().customerId,
        movieId: this.movie.movieId,
        name: this.movie.name,
        theatreId: theatreId,
        noOfSeats: this.noOfSeats,
        bookingDate: this.datePipe.transform(this.bookingDate, 'yyyy-MM-dd'),
        ticketPrice: this.theatres.find(t => t.theatreId === theatreId).ticketPrice
      }
    });
  }

  getTheatreName(theatreId: number) {
    return this.theatres.find(t => t.theatreId === theatreId).theatreName;
  }

  getTicketPrice(theatreId: number) {
    return this.theatres.find(t => t.theatreId === theatreId).ticketPrice;
  }
}
