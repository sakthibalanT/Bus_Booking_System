 

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../assets/bootstrap.min.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  name:string="";
  age:number=0;
  phone:number=0;
  gender:string="";
  addr:string="";
  adhaar:number=0;
  role:string="user"
  errorMessage: string = '';

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl("/");
    }
}
  constructor(private authService: AuthService,private router:Router) { }

  register(): void {
    this.authService.register(this.username, this.password,this.name,this.age,this.phone,this.gender,this.addr,this.adhaar,this.role).subscribe(
      (response) => {
         console.log(response.message);
        
        this.authService.login(this.username, this.password).subscribe(
          (response) => {
             console.log(response.token);
            this.router.navigateByUrl('/home');
    
          },
          (error) => {
             this.errorMessage = error.error.message;
          }
        );

      },
      (error) => {
         this.errorMessage = error.error.message;
      }
    );
  }
}
