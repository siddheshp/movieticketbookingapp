import { Router } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css']
})
export class AddTheatreComponent implements OnInit {
  theatreForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.theatreForm = this.formBuilder.group({
      theatreName: ['', [Validators.required, Validators.minLength(3)]],
      ticketPrice: [1, Validators.required],
      cityId: ['', Validators.required]
    });
  }
  goBack() {
    this.location.back();
  }

  addTheatre() {
    //call adminservice 
    // success -> admin
    // fail
    this.adminService.addTheatre(this.theatreForm.value).subscribe(result => {
      //navigate to admin dashboard
      console.log(result);
      alert('Theatre added');
      this.router.navigate(['/admin']);
    }, err => {
      alert(JSON.stringify(err));
    });
  }
}
