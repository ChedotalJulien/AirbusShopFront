import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaddyComponent } from './caddy/caddy.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';

    @NgModule({
      declarations: [
        AppComponent,
        CaddyComponent,
        ProductsComponent
      ],

        imports: [
          BrowserModule,
          AppRoutingModule, HttpClientModule
        ],
        providers: [],
        bootstrap: [AppComponent, CaddyComponent]
      })

export class AppModule { }
