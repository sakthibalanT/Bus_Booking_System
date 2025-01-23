import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css','../assets/bootstrap.min.css'],

})
export class AppComponent {
  title="Bus Booking"
}
