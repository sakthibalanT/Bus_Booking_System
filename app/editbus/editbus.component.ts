import { Component } from '@angular/core';
import { BusService } from '../bus.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbus',
  templateUrl: './editbus.component.html',
  styleUrl: './editbus.component.css'
})
export class EditbusComponent {
  busData: any = {
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
  id:string=""
  editBus(): void {
    this.id=this.reqbuses[0].busNumber;
    this.busService.updateBus(this.id,this.busData).subscribe(
      (response) => {
         console.log('Bus edited successfully:', response);
         this.busData = {};
        this.dest=""
        this.Preferred=0;
        this.i=0
        this.errormsg=""
        this.success="Succesfully Registered"
        this.reqbuses=[]
      },
      (error) => {
        // Handle bus creation error
        console.error('Error creating bus:', error);
        this.dest=""
        this.Preferred=0;
        this.i=0
        this.errormsg=""
        this.success="Error"
        this.reqbuses=[]
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
