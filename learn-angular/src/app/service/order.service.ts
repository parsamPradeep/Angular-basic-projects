import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: Http) { }

  getOrders(){
  let header = new Headers();
  let token = localStorage.getItem('token')
  header.append('Autherization', 'Bearer '+token);

  let options = new RequestOptions({headers: header})
  return this.http.get('api/order', options).pipe(map(response => response.json()));
  }
}
