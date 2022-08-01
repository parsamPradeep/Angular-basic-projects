import { OrderService } from './../service/order.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:any;
  orders: any;
  constructor(private http: HttpClient, private orderService: OrderService) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe( res =>{
      this.users=res;
    })
    this.orderService.getOrders().subscribe( res => this.orders=res);
  }

}
