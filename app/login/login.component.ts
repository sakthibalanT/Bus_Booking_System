 

import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  ngOnInit(): void {
      if(this.authService.isLoggedIn()){
        this.router.navigateByUrl("/");
      }
  }
  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
         console.log(response.token);
        sessionStorage.setItem("name",response.user.name)
        sessionStorage.setItem("uid",response.user.username)
        sessionStorage.setItem("gender",response.user.gender)
        sessionStorage.setItem("phone",response.user.phone)
        sessionStorage.setItem("role",response.user.role)

        this.router.navigateByUrl('/home');

      },
      (error) => {
         this.errorMessage = error.error.message;
      }
    );
  }
}
