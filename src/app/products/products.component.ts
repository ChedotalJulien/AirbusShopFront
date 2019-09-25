import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products;

  constructor(private catService:CatalogueService) { }

      ngOnInit() {
        this.getProducts();
      }

      private getproducts() {
        this.catservice.getResource("/products/search/selectedProducts")
        .subscribe(data=>{
          this.products=data
        },err=>{
        console.log(err);
      })
  }
}
