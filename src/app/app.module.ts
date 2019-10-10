/* importing components */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { CaddyComponent } from './caddy/caddy.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';

/* importing Module of your components */
@NgModule({
declarations: [
AppComponent,
ProductsComponent,
LoginComponent,
CaddyComponent,
ClientComponent,
ProductComponent,
PaymentComponent,
],

/* importing road */
imports: [
BrowserModule,
AppRoutingModule, HttpClientModule,FormsModule,
],
providers: [],
bootstrap: [AppComponent]
})

/* exporting Class */
export class AppModule { }

// END //
