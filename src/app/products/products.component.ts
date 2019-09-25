import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  response: any;
  products: any;
  tab=[];
  constructor(private _httpClient: HttpClient,private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {

    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        let url = val.url
        console.log(url)
        let p1 = this.route.snapshot.params.p1

        if(p1==1){
          this.getProducts('http://10.0.4.85:8080/products/search/selectedProducts')
        }
        else if(p1 == 2){
          let idCat = this.route.snapshot.params.p2
          this.getProducts('http://10.0.4.85:8080/categories/'+idCat+'/product')
        }
        // console.log(this.activatedRoute)
      }
      let p1 = this.route.snapshot.params.p1

      if(p1==1){
        this.getProducts('http://10.0.4.85:8080/products/search/selectedProducts')
      }
    })





  }
  private getProducts(url)
  {
    this._httpClient.get(url).subscribe((res: any) => {
      this.products = res._embedded.products;
      console.log(this.products)
    })

  }


}
