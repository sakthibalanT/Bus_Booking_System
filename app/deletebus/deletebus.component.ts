import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebus',
  templateUrl: './deletebus.component.html',
  styleUrl: './deletebus.component.css'
})
export class DeletebusComponent {
  busData: any = {
    // Initialize bus data object with default values
  };
  buses:any[] = [];
  constructor(private authService: AuthService,private router:Router, public busService:BusService) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      console.log("You do not have acces to this page(403)")
      this.authService.logout(); 
      window.location.href = '/login';
    }
    this.fetchBuses();


  }
  reqbuses:any[]=[];
  dest:string=""
  Preferred:number=0;
  i:number=0;
  errormsg:string=""
  success:string=""
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
  
  search(){
    for (this.i=0;this.i<this.buses.length;this.i++){
       
       let bus1=this.buses[this.i]
       if (bus1.busNumber==this.busData.busNumber){
           this.reqbuses.push(bus1)
       }
    }
    this.busData=this.reqbuses[0]
    console.log(this.reqbuses)
}
}
