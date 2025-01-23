 
import { Component } from '@angular/core';
import { BusService } from '../bus.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css','../../assets/bootstrap.min.css']
})
export class AddBusComponent {
  busData: any = {
   };

  constructor(private busService: BusService) { }

  addBus(): void {
    this.busService.createBus(this.busData).subscribe(
      (response) => {
         console.log('Bus created successfully:', response);
         this.busData = {};
      },
      (error) => {
         console.error('Error creating bus:', error);
      }
    );
  }
}
