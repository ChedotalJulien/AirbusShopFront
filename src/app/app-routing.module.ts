import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CaddyComponent } from './caddy/caddy.component';




  const routes: Routes = [
    {path:'products',components:ProductsComponent}
  ];

    @NgModule({

      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })

  export class AppRoutingModule { }

