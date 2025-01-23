import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-specific-reserves',
  templateUrl: './specific-reserves.component.html',
  styleUrl: './specific-reserves.component.css'
})
export class SpecificReservesComponent {
  reservations: any[] = [];
  errorMessage: string = '';
  reqreserves:any[]=[]

  constructor(private reservationService: BusService) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getReserve().subscribe(
      (reservations) => {
        this.reservations = reservations;
        this.sortReserves();
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
  sortReserves(){
    const phoneNumber = sessionStorage.getItem("phone");

    if (phoneNumber) {
      this.reqreserves = this.reservations.filter((reservation) => {
        return reservation.phone == phoneNumber;
      });
      console.log(this.reqreserves)
    } else {
      this.reqreserves = []; 
    }
  }
  
}
