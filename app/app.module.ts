import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { BookBusComponent } from './book-bus/book-bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { EditbusComponent } from './editbus/editbus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SpecificReservesComponent } from './specific-reserves/specific-reserves.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    BookBusComponent,
    AddBusComponent,
    BusListComponent,
    AdminComponent,
    EditbusComponent,
    DeletebusComponent,
    ReservationsComponent,
    SpecificReservesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
