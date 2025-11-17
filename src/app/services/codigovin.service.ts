import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodigovinService {
  private apiUrl = 'http://localhost:3001/vehicleData';

  constructor(private http: HttpClient) { }

  getVin(vin: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, {vin})
  }
}
