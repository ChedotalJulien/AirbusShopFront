/* importing components */

import {Client} from '../model/client.model';
import {ItemProduct} from '../model/item-product.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';
import {CaddyService} from '../services/caddy.service';
import {Order} from '../model/Order.model';
import {Observable} from 'rxjs';

@Injectable({
providedIn:'root'
})

/* import Class */
export class OrderService {
public order:Order=new Order();

/* Constructor */
constructor(private caddyService:CaddyService,
              private httpClient:HttpClient,
              private catalService:CatalogueService){}

  public setClient(client:Client){
    this.order.client=client;
  }
  public loadProductsFromCaddy(){
    this.order.products=[];
   for(let key in this.caddyService.getCaddy().items){
     this.order.products.push(this.caddyService.getCaddy().items[key]);
   }
  }
  public getTotal():number{
    let total:number=0;
    this.order.products.forEach(p=>{
      total+=p.price*p.quantity;
    });
    return total;
  }

  submitOrder() {
    return this.httpClient.post(this.catalService.host+"/orders",this.order);
  }

  public getOrder(id:number):Observable<Order>{
    return this.httpClient.get<Order>(this.catalService.host+"/orders/"+id);
  }
}

// END //
