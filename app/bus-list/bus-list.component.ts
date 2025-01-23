// bus-list.component.ts

import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css','../../assets/bootstrap.min.css']
})
export class BusListComponent implements OnInit {
  buses:any[] = [];

  constructor(private busService: BusService) { }

  ngOnInit(): void {
    this.fetchBuses();
  }

  fetchBuses(): void {
    this.busService.getBuses().subscribe(
      (buses) => {
        this.buses = buses;
      },
      (error) => {
        console.error('Error fetching buses:', error);
      }
    );
  }
}
