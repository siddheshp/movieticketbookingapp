import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username: string;
  password:string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(credentials: NgForm){
    console.log(credentials);
    //call authservice method
    this.authService.signin(credentials).subscribe(result=>{
      //sucess
      alert('login successful');
      let user = result as User;
      if (user.userTypeId === 2) { //admin
        //navigate to admin home
        this.router.navigate(['/admin']);
      }
      else {
        // navigate to customer dashboard
        this.router.navigate(['/customer']);
      }
    }, err=>{
      alert(JSON.stringify(err));
    });
  }
}
