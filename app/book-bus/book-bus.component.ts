import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-book-bus',
  templateUrl: './book-bus.component.html',
  styleUrls: ['./book-bus.component.css','../../assets/bootstrap.min.css']
})
export class BookBusComponent {
  constructor(private authService: AuthService,private router:Router, public busService:BusService) {}
  buses:any[] = [];

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
  search(){
       for (this.i=0;this.i<this.buses.length;this.i++){
          
          let bus1=this.buses[this.i]
          if (bus1.end==this.dest){
              this.reqbuses.push(bus1)
          }
       }
       console.log(this.reqbuses)
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

  addReservation(): void {
    
    let busData={busNumber: this.buses.find((value)=>{
      if(value.busNumber===this.Preferred){
        return value;
      }
    }).busNumber,
      name:sessionStorage.getItem("name"),
      username:sessionStorage.getItem("uid"),
      busname:this.buses.find((value)=>{
        if(value.busNumber===this.Preferred){
          return value;
        }
      }).busname,
      date:this.buses.find((value)=>{
        if(value.busNumber===this.Preferred){
          return value;
        }
      }).date,
     start:this.buses.find((value)=>{
      if(value.busNumber===this.Preferred){
        return value;
      }
    }).start,
     end:this.buses.find((value)=>{
      if(value.busNumber===this.Preferred){
        return value;
      }
    }).end,
     gender:sessionStorage.getItem("gender"),
     phone:sessionStorage.getItem("phone")}
    
    this.busService.reserveBus(busData).subscribe(
      (response) => {
         console.log('Bus created successfully:', response);
        this.dest=""
        this.Preferred=0;
        this.i=0
        this.errormsg=""
        this.success="Succesfully Registered"
        this.reqbuses=[]
      },
      (error) => {
         console.error('Error creating bus:', error);
        this.errormsg=error.message
      }
    );
  }
}
