import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirbusShopFront';
  category: any
  private categories;
  private currentCategorie;
  constructor(private _httpClient: HttpClient,private route: ActivatedRoute,private router: Router) {
  }
  ngOnInit(){
    this._httpClient.get('http://10.0.4.85:8080/categories').subscribe((res: any) => {
      this.category = res._embedded.categories;
      console.log(this.category)
    })
  }
  getProductsByCat(c){
    this.currentCategorie = c
    this.router.navigateByUrl('/products/2/'+c.id)
  }
  onselectedProducts(){
    this.currentCategorie = undefined
    this.router.navigateByUrl("/products/1/0")
  }
}
