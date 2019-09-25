import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: 'products/:p1/:p2', component: ProductsComponent},
  {path: '', redirectTo: 'products/1/0', pathMatch: 'full'}
  ,
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
