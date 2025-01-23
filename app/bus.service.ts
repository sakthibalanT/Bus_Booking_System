 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BusService {
  private baseUrl = 'http://localhost:3000/api/buses';
  private reserveUrl = 'http://localhost:3000/api/reserve';
  constructor(private http: HttpClient) { }

  createBus(busData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, busData);
  }

  getBuses(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getBusById(busId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${busId}`);
  }

  updateBus(busId: string, busData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${busId}`, busData);
  }

  deleteBus(busId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${busId}`);
  }

  reserveBus(busData:any): Observable<any> {
    return this.http.post<any>(this.reserveUrl,busData);
  }
  getReserve(): Observable<any> {
    return this.http.get<any>(this.reserveUrl);
  }

}
