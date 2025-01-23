// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { BookBusComponent } from './book-bus/book-bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AdminComponent } from './admin/admin.component';
import { EditbusComponent } from './editbus/editbus.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { SpecificReservesComponent } from './specific-reserves/specific-reserves.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'book', component: BookBusComponent,canActivate:[AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path:'addbus',component: AddBusComponent,canActivate:[AuthGuard]},
  {path:'showbus',component: BusListComponent,canActivate:[AuthGuard]},
  {path:'admin',component: AdminComponent,canActivate:[AuthGuard]},
  {path:'editbus',component: EditbusComponent,canActivate:[AuthGuard]},
  {path:'reserves',component: ReservationsComponent,canActivate:[AuthGuard]},
  {path:'deletebus',component: DeletebusComponent,canActivate:[AuthGuard]},
  {path:'userreserves',component: SpecificReservesComponent,canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
