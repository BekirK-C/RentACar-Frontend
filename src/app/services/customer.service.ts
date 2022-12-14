import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44368/api/customers/';
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomerById(customerId:number):Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+"getbycustomerid?id="+customerId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  // getCustomerByEmail(email:string):Observable<SingleResponseModel<Customer>>{
  //   let newPath = this.apiUrl + "getbyemail?email="+email;
  //   return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  // }
}
