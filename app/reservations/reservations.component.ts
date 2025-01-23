import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: any[] = [];
  errorMessage: string = '';

  constructor(private reservationService: BusService) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getReserve().subscribe(
      (reservations) => {
        this.reservations = reservations;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
