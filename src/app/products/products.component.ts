import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  response: any;
  products: any;
  tab=[];
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get('http://10.0.4.85:8080/categories').subscribe( (response: any) => {
      this.response = response._embedded.categories;
      console.log(this.response)

    })
    this._httpClient.get('http://10.0.4.85:8080/products').subscribe((res: any) => {
      this.products= res._embedded.products;
      console.log(this.products)
    })




  }

}
