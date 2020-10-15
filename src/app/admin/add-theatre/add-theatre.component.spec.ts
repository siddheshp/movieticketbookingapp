import { AdminService } from './../../services/admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddTheatreComponent } from './add-theatre.component';

//test suite
describe('Add Theatre Component', () => {
    let component: AddTheatreComponent;
    let fixture: ComponentFixture<AddTheatreComponent>;
    let location: Location;
    let router: Router;
    let formBuilder: FormBuilder;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddTheatreComponent],
            imports: [ReactiveFormsModule, RouterModule, BrowserModule, HttpClientTestingModule],
            providers: [AdminService, { provide: Router, useValue: router }]
        })
            .compileComponents();
    }));

    //Arrange
    beforeEach(() => {
        //add spies
        location = jasmine.createSpyObj('location', ['back']);
        router = jasmine.createSpyObj('router', ['navigate']);
        formBuilder = jasmine.createSpyObj('formBuilder', ['group']);

        fixture = TestBed.createComponent(AddTheatreComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        component.theatreForm = formBuilder.group({
            theatreName: ['Mangala', [Validators.required, Validators.minLength(3)]],
            ticketPrice: [100, Validators.required],
            cityId: [1, Validators.required]
        });
        fixture.detectChanges();
    });

    //test case
    it('should create instance', () => {
        //assert
        expect(component).not.toBeNull();
    });

    //test case
    // it('should call goback', () => {
    //     //Act
    //     component.goBack();
    //     //Assert navigate back
    //     expect(location.back).toHaveBeenCalled();
    // });

    //test case
    // it('add theatre method should call navigate', () => {        
    //     component.addTheatre();
    //     expect(router.navigate).toHaveBeenCalled();
    // });
});
