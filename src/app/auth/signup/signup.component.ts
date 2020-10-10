import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = new User();

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  signupUser() {
    //call authservice method, pass details
    this.authService.signup(this.signup).subscribe(result => {
      console.log(result);
      alert(JSON.stringify(result));
      this.router.navigate(['/signin']);
    }, err => {
      alert(JSON.stringify(err));
    });
  }
}