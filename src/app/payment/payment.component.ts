/* importing components */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../model/Order.model';
import {OrderService} from '../services/order.service';

@Component({
selector: 'app-payment',
templateUrl: './payment.component.html',
styleUrls: ['./payment.component.css']
})

/* importing Class */
export class PaymentComponent implements OnInit {
paymentAmount:number;
currentOrder:Order;

/* Constructor */
constructor(private router:Router, private route:ActivatedRoute,
              private orderService:OrderService) { }

  ngOnInit() {
    let id=this.route.snapshot.params.orderID
    this.orderService.getOrder(id).subscribe(data=>{
      this.currentOrder=data;
    },err=>{
      console.log(err);
    })
  }

  onParOrder(data) {
    console.log(data);
  }
}
// END //
