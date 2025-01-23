 import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../assets/bootstrap.min.css','../../assets/vendor/remixicon/remixicon.css',"../../assets/vendor/swiper/swiper-bundle.min.css","../../assets/vendor/glightbox/css/glightbox.min.css","../../assets/vendor/boxicons/css/boxicons.min.css","../../assets/vendor/aos/aos.css","../../assets/vendor/bootstrap-icons/bootstrap-icons.css"]
})
export class HomeComponent implements OnInit{
  constructor(public authService: AuthService,private router:Router) {

  }
admin1:boolean=false;
 ngOnInit(){

  this.admin1=(sessionStorage.getItem('role')==='admin')
 }
  logout(): void {
    this.admin1=false;
    this.authService.logout();  
  }
}
