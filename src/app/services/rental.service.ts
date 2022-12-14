import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44368/api/';
  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rentals/getdetails";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl+"rentals/add";
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
  getRentalByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"rentals/getrentalbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
