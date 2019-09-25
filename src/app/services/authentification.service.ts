import { Injectable } from '@angular/core';

        @Injectable({
          providedIn: 'root'
        })

    export class AuthentificationService {
       private authenticated:boolean;
       private authentificationToken:string;

        constructor() { }

              login(username,password){
                  if(username==='admin' && password ==='1234'){
                    this.authenticated=true;
                    this.authentification="admin_azerty";
                    localStorage.setItem('userToken',this.authenticationToken)
                    return this.authenticated;
                  }
                else return false;
              }


              isAuthenticated(){
                return this.authenticated;
              }

              loadAutheticatedUser(){
                this.authentificationToken=localStorage.getItem('userToken');
                if(this.authentificationToken==='admin_azerty')
                this.authenticated=true;
              }

              logout(){
                localStorage.removeItem('userToken');
                this.authenticated=false;
              }
    }

