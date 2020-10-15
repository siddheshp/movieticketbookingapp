import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Theatre } from '../models/theatre';

import { AdminService } from './admin.service';

//test suite
describe('Admin Service', () => {
    let service: AdminService;
    let httpMock: HttpTestingController

    //initilization, Arrange
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AdminService]
        });
        httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(AdminService);
    });

    //test case
    it('should be created', () => {
        //Assert
        expect(service).not.toBeNull(); 
    });

    //test case
    it('should add theatre and return it', () => {
        const theatre = new Theatre({
            theatreName: "Jubliee Plex 10",
            ticketPrice: 125,
            cityId: 1,
            movieIds: [],
            bookingIds: [],
            theatreId: 1
        });

        service.addTheatre(theatre).subscribe(result => {
            expect(result).toBe(theatre);
            expect(result.theatreName).toBe(theatre.theatreName);
        });

        const url = 'http://localhost:7070/movie_app/v1/theatres';
        const req = httpMock.expectOne(url);
        expect(req.request.method).toBe('POST');
        req.flush(theatre);
    });
});
